const passwordValidator = require("./pswdValidtr.js")

describe("password validation", () => {
    test("min six character required ", () => {
        expect(passwordValidator("maT&s4ai")).toBe(true)
    })
    test("atleast one uppercase character required ", () => {
        expect(passwordValidator("asaSi@12")).toBe(true)
    })
    test("atleast one lowercase character required ", () => {
        expect(passwordValidator("ASWnE@12")).toBe(true)
    })
    test("atleast one number  required ", () => {
        expect(passwordValidator("Tarun@12")).toBe(true)
    })
    test("atleast one symbol  required ", () => {
        expect(passwordValidator("Tarun2$")).toBe(true)
    })
    test("full testing 1 ", () => {
        expect(passwordValidator("Masai2$3%")).toBe(true)
    })
    test("full testing 2 ", () => {
        expect(passwordValidator("CHTGgfJtf33uf%^&*()?>")).toBe(true)
    })
    test("full testing 3 ", () => {
        expect(passwordValidator("uyfliuGoi|sdr344(**-+")).toBe(true)
    })
    test("full testing 4 ", () => {
        expect(passwordValidator("TarunRaw345at_+=?><,")).toBe(true)
    })
    test("full testing 5 ", () => {
        expect(passwordValidator("WERT23422xcv<>(){}:`;'")).toBe(true)
    })
}) 