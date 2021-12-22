describe("boolean checks", () => {
    test("true false", () => {
        expect(true).toBeTruthy();
        expect(false).toBeFalsy();
        expect(5).not.toBeNaN();
        expect(5 + undefined).toBeNaN();
        let a;
        expect(a).toBeUndefined();
        let b = 2;
        expect(b).toBeDefined();
        expect(null).toBeNull();
        
    })
})