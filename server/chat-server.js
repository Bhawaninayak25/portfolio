const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = process.env.CHAT_SERVER_PORT || 8787;
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'conversations.json');
const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'change-me';
const INSTAGRAM_VERIFY_TOKEN = process.env.INSTAGRAM_VERIFY_TOKEN || VERIFY_TOKEN;
const DEFAULT_CONVERSATION = 'website-default';

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ conversations: {} }, null, 2));
  }
}

function readStore() {
  ensureStore();
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function writeStore(store) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(store, null, 2));
}

function getConversation(store, conversationId) {
  if (!store.conversations[conversationId]) {
    store.conversations[conversationId] = [];
  }

  return store.conversations[conversationId];
}

function appendMessage({ conversationId, sender, text, source = 'website', meta = {} }) {
  const store = readStore();
  const conversation = getConversation(store, conversationId);

  const message = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    sender,
    text,
    source,
    meta,
    createdAt: new Date().toISOString(),
  };

  conversation.push(message);
  writeStore(store);
  return message;
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(payload));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';

    req.on('data', (chunk) => {
      raw += chunk;
    });

    req.on('end', () => {
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(error);
      }
    });

    req.on('error', reject);
  });
}

async function handleApi(req, res, url) {
  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {});
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/chat/messages') {
    const store = readStore();
    const conversationId =
      url.searchParams.get('conversation') || DEFAULT_CONVERSATION;
    const messages = getConversation(store, conversationId);
    sendJson(res, 200, { conversationId, messages });
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/chat/messages') {
    const body = await parseBody(req);
    const conversationId = body.conversationId || DEFAULT_CONVERSATION;

    if (!body.text || !String(body.text).trim()) {
      sendJson(res, 400, { error: 'Message text is required.' });
      return;
    }

    const message = appendMessage({
      conversationId,
      sender: body.sender || 'visitor',
      text: String(body.text).trim(),
      source: body.source || 'website',
      meta: body.meta || {},
    });

    sendJson(res, 201, { message });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/chat/status') {
    sendJson(res, 200, {
      ok: true,
      instagramConfigured: Boolean(
        process.env.INSTAGRAM_APP_ID &&
          process.env.INSTAGRAM_APP_SECRET &&
          process.env.INSTAGRAM_PAGE_ACCESS_TOKEN
      ),
      note:
        'Manual replies from the Instagram app are not a reliable official sync path for your website. Use a professional Instagram account connected to a Facebook Page plus Meta messaging/webhooks.',
    });
    return;
  }

  sendJson(res, 404, { error: 'Not found' });
}

async function handleWhatsAppWebhook(req, res, url) {
  if (req.method === 'GET') {
    const mode = url.searchParams.get('hub.mode');
    const token = url.searchParams.get('hub.verify_token');
    const challenge = url.searchParams.get('hub.challenge');

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(challenge || '');
      return;
    }

    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  if (req.method === 'POST') {
    const body = await parseBody(req);
    const entries = body.entry || [];

    entries.forEach((entry) => {
      (entry.changes || []).forEach((change) => {
        const value = change.value || {};
        const messages = value.messages || [];
        const statuses = value.statuses || [];

        messages.forEach((message) => {
          const text =
            message.text?.body ||
            message.button?.text ||
            message.interactive?.button_reply?.title ||
            '[Unsupported message type]';

          appendMessage({
            conversationId: value.metadata?.phone_number_id || DEFAULT_CONVERSATION,
            sender: 'visitor',
            text,
            source: 'whatsapp',
            meta: {
              from: message.from,
              messageId: message.id,
            },
          });
        });

        statuses.forEach((status) => {
          if (status.status === 'sent' || status.status === 'delivered') {
            appendMessage({
              conversationId: value.metadata?.phone_number_id || DEFAULT_CONVERSATION,
              sender: 'owner',
              text: `WhatsApp message ${status.status}.`,
              source: 'whatsapp-status',
              meta: {
                recipientId: status.recipient_id,
                status: status.status,
              },
            });
          }
        });
      });
    });

    sendJson(res, 200, { received: true });
    return;
  }

  sendJson(res, 405, { error: 'Method not allowed' });
}

async function handleInstagramWebhook(req, res, url) {
  if (req.method === 'GET') {
    const mode = url.searchParams.get('hub.mode');
    const token = url.searchParams.get('hub.verify_token');
    const challenge = url.searchParams.get('hub.challenge');

    if (mode === 'subscribe' && token === INSTAGRAM_VERIFY_TOKEN) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(challenge || '');
      return;
    }

    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  if (req.method === 'POST') {
    const body = await parseBody(req);
    const entries = body.entry || [];

    entries.forEach((entry) => {
      (entry.messaging || []).forEach((event) => {
        const senderId = event.sender?.id;
        const recipientId = event.recipient?.id || DEFAULT_CONVERSATION;
        const text =
          event.message?.text ||
          event.postback?.title ||
          event.postback?.payload ||
          null;

        if (text) {
          appendMessage({
            conversationId: String(recipientId),
            sender: senderId === recipientId ? 'owner' : 'visitor',
            text,
            source: 'instagram',
            meta: {
              senderId,
              recipientId,
            },
          });
        }
      });
    });

    sendJson(res, 200, { received: true });
    return;
  }

  sendJson(res, 405, { error: 'Method not allowed' });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  try {
    if (url.pathname.startsWith('/api/')) {
      await handleApi(req, res, url);
      return;
    }

    if (url.pathname === '/webhooks/whatsapp') {
      await handleWhatsAppWebhook(req, res, url);
      return;
    }

    if (url.pathname === '/webhooks/instagram') {
      await handleInstagramWebhook(req, res, url);
      return;
    }

    sendJson(res, 404, { error: 'Route not found' });
  } catch (error) {
    sendJson(res, 500, { error: error.message || 'Server error' });
  }
});

server.listen(PORT, () => {
  ensureStore();
  console.log(`Chat server running on http://localhost:${PORT}`);
});
