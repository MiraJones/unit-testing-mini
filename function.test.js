let fn = require("./function")

describe("test math functions", () => {
    test("2 + 30 should be 32", () => {
        var result = fn.add(2, 30);
        expect(result).toEqual(32)
    }),
    test("2 + '30' should be 32", () => {
        var result = fn.add(2, "30");
        expect(result).toEqual(32)
    }),
    test("2 * 30 should be 60", () => {
        var result = fn.mult(2, 30);
        expect(result).toEqual(60)
    }),
    test("2 * '30' should be 60", () => {
        var result = fn.mult(2, '30');
        expect(result).toEqual(60)
    })
})