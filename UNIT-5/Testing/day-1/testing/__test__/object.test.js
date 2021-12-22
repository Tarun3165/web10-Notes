

describe("objects checks", () => {
    test("instance check ", () => {
        let output = {};
        expect(output).toBeInstanceOf(Object);

    })
    test("instance check ", () => {
        let output = [1,2,3,4];
        expect(output).toEqual(expect.arrayContaining([2,4]));

    })
})