import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingAnimation from '../LoadingAnimation';

describe('Loading Animation compontent', () => {
  it('renders the animation container', () => {
    render(<LoadingAnimation />);
    const wrapperElement = screen.getByTestId('book-wrapper');
    expect(wrapperElement).toBeInTheDocument();
  });
  it('renders the unordered list', () => {
    render(<LoadingAnimation />);
    const ulElement = screen.getByTestId('book-list');
    expect(ulElement).toBeInTheDocument();
  });
  it('renders six book elements', () => {
    render(<LoadingAnimation />);
    const bookElements = screen.getAllByTestId('book');
    expect(bookElements.length).toBe(6);
  });
  it('renders the bottom shelf', () => {
    render(<LoadingAnimation />);
    const shelfElement = screen.getByTestId('book-shelf');
    expect(shelfElement).toBeInTheDocument();
  });
});
