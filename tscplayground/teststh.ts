class Test {
    outer(): void {
        function inner() : void {
            console.log("inner");
        }
        console.log("outer");
        inner();
        console.log("outer");
    }
}
const test1 = new Test();
test1.outer();