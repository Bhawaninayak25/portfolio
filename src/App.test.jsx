import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero content', () => {
  render(<App />);
  expect(
    screen.getByText(/building polished web experiences/i)
  ).toBeInTheDocument();
});
