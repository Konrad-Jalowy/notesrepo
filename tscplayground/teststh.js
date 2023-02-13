var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.outer = function () {
        function inner() {
            console.log("inner");
        }
        console.log("outer");
        inner();
        console.log("outer");
    };
    return Test;
}());
var test1 = new Test();
test1.outer();
