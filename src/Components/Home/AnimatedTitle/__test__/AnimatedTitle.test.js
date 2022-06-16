import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AnimatedTitle from '../AnimatedTitle';

describe('Homeview', () => {
  it('renders three animated elements', () => {
    render(<AnimatedTitle />);
    const upperSpan = screen.getByText(/Welcome/i);
    const subSpan = screen.getByText(/To the/i);
    const fntSpan = screen.getByText(/fantasy/i);
    const bottomText = screen.getByText(/Bookstore/i);
    expect(upperSpan).toBeInTheDocument();
    expect(subSpan).toBeInTheDocument();
    expect(bottomText).toBeInTheDocument();
    expect(fntSpan).toBeInTheDocument();
  });
});
