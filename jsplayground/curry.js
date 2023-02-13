const sum = function(a){
    return function(b){
        return a+b;
    }
}
console.log(sum(1)(2));

const currier = {
    sum: function(a){
        return function(b){
            return a + b;
        }
    }
}
console.log(currier.sum(1)(2));


class Currier {
    sum(a) {
        return function(b){
            return a + b;
        }
    }
}

const clsCurrier = new Currier();
console.log(clsCurrier.sum(1)(2));

