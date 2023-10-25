import { beforeEach, expect, test } from 'vitest';
import { Calc } from './calc';
import { TCommand } from './utils';

const cases: [TCommand[], string][] = [
  [['1'], '1'],
  [[',', '1'], '0,1'],
  [['1', ','], '1,'],
  [['1', ',', '3'], '1,3'],
  [['1', '+'], '1'],
  [['1', '+', '3'], '3'],
  [['1', '+', '3', '='], '4'],
  [['1', '+', '3', '+'], '4'],
  [['1', '+', '3', '+', '5'], '5'],
  [['1', '+', '3', '+', '5', '='], '9'],
  [['1', '+', '3', '+', '5', '+'], '9'],
  [['1', '2', '+', '3', '4', '='], '46'],
  [['1', '2', '*', '3', '4', '='], '408'],
];

let calc: Calc;

beforeEach(() => {
  calc = new Calc();
});

test('show empty initially', () => {
  expect(calc.current).toEqual('');
});

for (const [inputs, result] of cases) {
  test(`${inputs.map((input) => `[${input}]`).join(' ')} => [${result}]`, () => {
    expect(calc.inputMultiple(inputs).current).toEqual(result);
  });
}
