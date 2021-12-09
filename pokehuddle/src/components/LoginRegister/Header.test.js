import { render, screen } from '@testing-library/react';
import Header from './Header';


test('renders app', () => {
  render(<Header />);
  const appElement = screen.getByAltText('pokehuddle');
  expect(appElement).toBeInTheDocument();
});
