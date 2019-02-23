import discount from "../reducers/discount";

describe("todos reducer", () => {
  it("should return the default discount", () => {
    expect(discount(undefined, {})).toEqual(0);
  });

  it("should return 10 as discount when promo code DISCOUNT is applied", () => {
    const action = { type: "AVAIL_DISCOUNT" };
    expect(discount(undefined, action)).toEqual(10);
  });

  it("should return 0 as discount when promo code DISCOUNT is removed", () => {
    const action = { type: "REMOVE_DISCOUNT" };
    expect(discount(undefined, action)).toEqual(0);
  });
});
