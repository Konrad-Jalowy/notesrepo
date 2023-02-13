var Currier = /** @class */ (function () {
    function Currier() {
    }
    Currier.prototype.sum = function (a) {
        return function (b) {
            return a + b;
        };
    };
    return Currier;
}());
var currier = new Currier();
var output = currier.sum(1)(2);
console.log(output);
