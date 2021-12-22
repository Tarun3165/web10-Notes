describe("math checks", () => {
    test("number", () => {
        expect(100+300).toBeGreaterThan(300);
        expect(100+200).toBeGreaterThanOrEqual(300);
        expect(100+200).toBeLessThan(400 )
        expect(100+200).toBeLessThanOrEqual(300 )

    })
})