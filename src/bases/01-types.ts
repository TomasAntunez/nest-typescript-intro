
export let name: string = 'Tomas';
export const age: number = 24;
export const isValid: boolean = true;

name = 'chuli';
// name = 123;
// name = true;

export const templateString = `
  This is a multiline string,
  inject values ${ name },
  numbers: ${ age },
  booleans: ${ isValid }
`;

console.log( templateString );
