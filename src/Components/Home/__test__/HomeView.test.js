import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HomeView from '../HomeView';

describe('Homeview', () => {
  it('renders three animated elements', () => {
    render(<HomeView />);
    const upperSpan = screen.getByText(/Welcome/i);
    const subSpan = screen.getByText(/To the fantasy/i);
    const bottomText = screen.getByText(/Bookstore/i);
    expect(upperSpan).toBeInTheDocument();
    expect(subSpan).toBeInTheDocument();
    expect(bottomText).toBeInTheDocument();
  });
});
