

const  matrixSum  = require("./index.js")

describe("sum function", () => {
    test("testinf for square matrix,expects sum=10", () => {
        expect(matrixSum([[1,2],[3,4]],2,2)).toBe(10);
    })
})
describe("sum function", () => {
    test("do not expects 10 if in strings", () => {
        expect(matrixSum([[1,2],[3,"4"]],2,2)).not.toBe(10);
    })
})
describe("sum function", () => {
    test("special characters not allowed", () => {
        expect(matrixSum([[1,2],[3,"@"]],2,2)).not.toBe(6);
    })
})
describe("sum function", () => {
    test("testing for unsymetric matrix", () => {
        expect(matrixSum([[1,2],[3,5],[3,5]],3,2)).toBe(19);
    })
})

describe("sum function", () => {
    test(" no. of elements in a particular col should be equal", () => {
        expect(matrixSum([[1,2],[3,5,4]],2,3)).not.toBe(15);
    })
})
describe("sum function", () => {
    test(" empty matrix sum should be 0", () => {
        expect(matrixSum([[],[]],0,0)).toBe(0);
    })
})

describe("testing transposable", () => {
    test("row col interchange sum should be same", () => {
        expect(matrixSum([[1,2],[3,5],[2,3]],3,2)).toBe(16);
    })

    test("row col interchange  sum should be same", () => {
        expect(matrixSum([[1,3,2],[2,5,3]],2,3)).toBe(16);
    })
})


