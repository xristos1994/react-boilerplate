const nullOrUndefinedToValue = (input, output) =>
  input === null || input === undefined ? output : input;

export { nullOrUndefinedToValue };
