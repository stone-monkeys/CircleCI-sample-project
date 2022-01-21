import { render, screen, fireEvent  } from '@testing-library/react';
import App from './App';
import React from 'react';

test('Should display text', () => {
  render(<App />);

   console.log("Hello World test")
});
