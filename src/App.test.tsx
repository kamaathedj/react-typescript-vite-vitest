import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('it should test app.tsx', () => {
  it('renders the Vite + React', () => {
    // arrange
    render(<App />);
    // act
    // expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Vite + React');
  });
});
