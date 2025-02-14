console.log(require.resolve('react-router-dom'));

import React from 'react'; // <-- Ensure this is added

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import { useNavigate } from "react-router";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
}));

test("should call navigate", () => {
  const navigate = jest.fn();
  useNavigate.mockReturnValue(navigate);

  // Simulate navigation in your test
  navigate("/");
  expect(navigate).toHaveBeenCalledWith("/home");
});

test('renders home page', () => {
  render(
  <MemoryRouter>
  <Home />
  </MemoryRouter>
  );
  const linkElement = screen.getByText(/Trending/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders watchlist page', () => {
  render(
  <MemoryRouter>
  <Cart />
  </MemoryRouter>
  );
  const linkElement = screen.getByText(/Cart Items/i);
  expect(linkElement).toBeInTheDocument();
});

// test('displays data after fetching', async () => {
//   render(<Content />);
//   await waitFor(() => expect(screen.getByText(/Trending/i)).toBeInTheDocument());
// });
