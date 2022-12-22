import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('should increment', () => {
  render(<App />);
  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument();

  expect(button).toHaveTextContent(/0 times/);
  fireEvent.click(button)
  expect(button).toHaveTextContent(/1 times/);
  fireEvent.click(button)
  expect(button).toHaveTextContent(/2 times/);
  fireEvent.click(button)
  expect(button).toHaveTextContent(/3 times/);
});
