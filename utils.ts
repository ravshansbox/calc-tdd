export type TElementOf<TArray extends readonly unknown[]> =
  TArray extends readonly (infer TElement)[] ? TElement : never;

export const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
export type TNumber = TElementOf<typeof numbers>;

export const decimals = [','] as const;
export type TDecimal = TElementOf<typeof decimals>;

export const operators = ['+', '-', '*', '/'] as const;
export type TOperator = TElementOf<typeof operators>;

export const equals = ['='] as const;
export type TEqual = TElementOf<typeof equals>;

export type TCommand = TNumber | TDecimal | TOperator | TEqual;
