const sum = (...params) => params.reduce((result, elem) => result + elem, 0);

describe('Examining the syntax of Jest tests', () => {
  it('sums numbers', () => {
    expect(sum(5)).toEqual(5);
    expect(sum(2, 6)).toEqual(8);
  });
});
