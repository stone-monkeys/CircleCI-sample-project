const divide = (a, b) => a / b;

describe("Division testing", () => {
  test("8 / 1 = 8", () => {
    expect(divide(8, 1)).toBe(8);
  });

  test("9 / 3 = 2", () => {
    expect(divide(9, 3)).toBe(3);
  });
});

// import { render, screen, fireEvent  } from '@testing-library/react';
// import App from './App';
// import React from 'react';

// test('Hello World Test 5', () => {
//   render(<App />);
//     console.log("Hello World test 5")
// });

// test('Hello World Test 6', () => {
//   render(<App />);
//     console.log("Hello World test 6")
// });
