import { render, screen } from '@testing-library/react';
import Header from './Header';


test('renders header image', () => {
  render(<Header />);
  const appElement = screen.getByRole('banner');
  expect(appElement).toBeInTheDocument();
});
