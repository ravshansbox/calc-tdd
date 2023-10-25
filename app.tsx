import { MouseEventHandler, useState } from 'react';
import { Calc } from './calc';
import { TCommand, decimals, equals, numbers, operators } from './utils';

const calc = new Calc();

export const App = () => {
  const [current, setCurrent] = useState('');

  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setCurrent(calc.inputSingle(event.currentTarget.dataset.command as TCommand).current);
  };

  return (
    <main>
      <section>
        {[...numbers, ...decimals].map((command) => (
          <button key={command} data-command={command} onClick={onClick}>
            {command}
          </button>
        ))}
      </section>
      <section>
        {[...operators, ...equals].map((command) => (
          <button key={command} data-command={command} onClick={onClick}>
            {command}
          </button>
        ))}
      </section>
      <p>{current}</p>
    </main>
  );
};
