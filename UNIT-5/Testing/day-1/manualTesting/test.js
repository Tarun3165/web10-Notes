function test(description , fun)
{
    console.log(description);
    fun()
}

function expect(received) {
    function tobe(expected) {
        if(received===expected)
            console.log("test passed");
            else
          {  console.log("test failed");
            console.log("received",received);
            console.log("expected", expected);
         }
    }
    return {tobe}
}

test("sum of 2 , 3 should be 5", () => {
    expect(1+2).tobe(3)
})

const sum = (a, b) => a + b;
const absDiff = (a, b) => a - b;

test("sum(5,3) should be 8", () => {
    expect(sum(5,3)).tobe(8)
})
test("absDiff(4,7) should be 3", () => {
    expect(absDiff(4,7)).tobe(3)
})