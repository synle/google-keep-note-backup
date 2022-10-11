import Calc from 'src/Calc';

test('Sum should work for positive numbers', () => {
  expect(Calc.sum(1, 2)).toBe(3);
});

test('Sum should work for negative numbers', () => {
  expect(Calc.sum(-5, -10)).toBe(-15);
});

test('Sum should work for one positive number and one negative number', () => {
  expect(Calc.sum(4, -8)).toBe(-4);
});
