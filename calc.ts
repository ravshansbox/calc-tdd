import { numbers, type TCommand, type TOperator } from './utils';

const doCalc = (operator: TOperator, operand1: number, operand2: number) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
  }
};

export class Calc {
  current: string = '';
  previous: string = '';
  operator: TOperator | '' = '';

  inputMultiple(commands: TCommand[]) {
    for (const command of commands) {
      this.inputSingle(command);
    }
    return this;
  }

  inputSingle(command: TCommand) {
    const { current, previous, operator } = this;
    if (command === '=') {
      this.doCalc();
    } else if (command === '+') {
      if (previous !== '') {
        this.doCalc();
      }
      this.operator = command;
    } else if (command === '-') {
      if (previous !== '') {
        this.doCalc();
      }
      this.operator = command;
    } else if (command === '*') {
      if (previous !== '') {
        this.doCalc();
      }
      this.operator = command;
    } else if (command === '/') {
      if (previous !== '') {
        this.doCalc();
      }
      this.operator = command;
    } else if (command === ',') {
      if (operator === '') {
        this.current = (current === '' ? '0' : current) + command;
      } else {
        this.previous = (previous === '' ? '0' : previous) + command;
      }
    } else if (numbers.includes(command)) {
      if (operator === '') {
        this.current = current === '' ? command : current + command;
      } else {
        if (previous === '') {
          this.previous = current;
          this.current = command;
        } else {
          this.current = current === '' ? command : current + command;
        }
      }
    }
    return this;
  }

  doCalc() {
    const { current, previous, operator } = this;
    if (operator !== '') {
      this.current = String(doCalc(operator, Number(current), Number(previous)));
      this.previous = '';
      this.operator = '';
    }
  }
}
