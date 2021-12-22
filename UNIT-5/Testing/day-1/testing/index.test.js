

const  sum  = require("./fn.js")

describe("sum function", () => {
    test("2 ,3", () => {
        expect(sum(1, 1)).toBe(2);
    })
})

//jest setup
// install jest using (npm i --save-dev jest)
// run command -> npm test -- -- watchAll to run on save