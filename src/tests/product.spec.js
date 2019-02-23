import product from "../reducers/product";

describe("todos reducer", () => {
  it("should return the default discount", () => {
    const response = {};
    expect(product(undefined, {})).toEqual(response);
  });
});
