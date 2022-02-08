const add = (a, b) => a + b;
describe('Addition testing', () => {
    test('2 + 2 = 4', () => {
        expect(add(2, 2)).toBe(4);
      });

      test('2 + 3 = 5', () => {
        expect(add(2, 3)).toBe(5);
      });   

      test('2 + 5 = 7', () => {
        expect(add(2, 5)).toBe(7);
      });    

      test('2 + 7 = 9', () => {
        expect(add(2, 7)).toBe(9);
      });    

      test('2 + 20 = 22', () => {
        expect(add(2, 20)).toBe(22);
      });
})

// import { render, screen, fireEvent  } from '@testing-library/react';
// import App from './App';
// import React from 'react';

// test('Hello World Test 1', () => {
//   render(<App />);
//     console.log("Hello World test")
// });

// test('Hello World Test 2', () => {
//   render(<App />);
//     console.log("Hello World test")
// });
