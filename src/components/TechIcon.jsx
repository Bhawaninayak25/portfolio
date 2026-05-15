import React from 'react';

const iconPaths = {
  code: 'M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14',
  server: 'M4 6h16v5H4zM4 13h16v5H4zM7 8h.01M7 15h.01',
  workflow: 'M6 7a3 3 0 116 0 3 3 0 01-6 0zM14 17a3 3 0 116 0 3 3 0 01-6 0zM4 17a3 3 0 116 0 3 3 0 01-6 0zM9 9.5l2 4M15 9.5l-2 4',
  html: 'M5 4h14l-1.2 15L12 21l-5.8-2L5 4zM9 8h6M9.5 12h5l-.3 3-2.2.8-2.2-.8',
  css: 'M5 4h14l-1.2 15L12 21l-5.8-2L5 4zM9 8h6l-.4 4H10l-.2 3 2.2.8 2.2-.8.1-1',
  js: 'M5 4h14v16H5zM9 15c0 1.2.7 2 1.8 2S12 16.2 12 15v-4M14 16c.4.6 1 .9 1.8.9 1 0 1.7-.5 1.7-1.3 0-1.9-3.2-1.1-3.2-3.1 0-1 .8-1.7 2-1.7.7 0 1.3.2 1.8.7',
  react: 'M12 12m-2 0a2 2 0 104 0 2 2 0 10-4 0M12 6c4.8 0 8.7 2.7 8.7 6S16.8 18 12 18s-8.7-2.7-8.7-6S7.2 6 12 6zM7.2 9c2.4-4.1 6.3-6 8.9-4.5s2.9 5.9.5 10-6.3 6-8.9 4.5-2.9-5.9-.5-10zM16.8 9c2.4 4.1 2.1 8.5-.5 10s-6.5-.4-8.9-4.5-2.1-8.5.5-10 6.5.4 8.9 4.5z',
  mobile: 'M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2',
  node: 'M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM9 10v4M15 10v4M9 12h6',
  database: 'M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6',
  lock: 'M7 11V8a5 5 0 0110 0v3M6 11h12v10H6zM12 15v2',
  git: 'M7 7l10 10M7 7a2 2 0 100-4 2 2 0 000 4zM17 21a2 2 0 100-4 2 2 0 000 4zM17 7a2 2 0 100-4 2 2 0 000 4zM9 5h6',
  docker: 'M4 13h15c-.4 4.2-3 7-7.5 7C7.6 20 5 18 4 13zM6 10h3v3H6zM10 10h3v3h-3zM14 10h3v3h-3zM10 6h3v3h-3z',
  cloud: 'M7 18a4 4 0 01.5-8 5 5 0 019.7 1.4A3.5 3.5 0 1118 18H7z',
  api: 'M8 12h8M12 8v8M4 7h3v10H4zM17 7h3v10h-3z',
};

const aliases = {
  HTML5: 'html',
  CSS3: 'css',
  JavaScript: 'js',
  'React.js': 'react',
  React: 'react',
  'Responsive UI': 'mobile',
  PWA: 'mobile',
  'Node.js': 'node',
  'Express.js': 'server',
  'Nest.js': 'server',
  'REST APIs': 'api',
  JWT: 'lock',
  MongoDB: 'database',
  MySQL: 'database',
  PostgreSQL: 'database',
  Git: 'git',
  GitHub: 'git',
  Docker: 'docker',
  AWS: 'cloud',
  Postman: 'api',
  'CI/CD': 'workflow',
};

const TechIcon = ({ name, type = 'code', className = '' }) => {
  const icon = aliases[name] || type;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={iconPaths[icon] || iconPaths.code} />
    </svg>
  );
};

export default TechIcon;
