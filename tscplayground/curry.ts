class Currier {
    sum(a: number) : Function {
        return function(b: number) : number{
            return a + b;
        }
    }
}

let currier = new Currier();
let output = currier.sum(1)(2);
console.log(output);