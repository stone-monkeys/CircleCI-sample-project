import { render, screen, fireEvent  } from '@testing-library/react';
import App from './App';
import React from 'react';

test('Hello World Test 1', () => {
  render(<App />);
    console.log("Hello World test")
});

test('Hello World Test 2', () => {
  render(<App />);
    console.log("Hello World test")
});
