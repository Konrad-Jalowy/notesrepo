function test(){
    return
    {
        name: "KJ"
    }
}
let obj1 = test();

function test2(){
    return
    {
        name: "KJ"
    };
}

let obj2 = test2();
console.log(obj2.name);

function test3(){
    return{
        name: "KJ"
    }
}
let obj3 = test3();
console.log(obj3.name);