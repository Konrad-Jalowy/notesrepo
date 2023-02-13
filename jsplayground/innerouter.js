function outer(){
    function inner(){
        console.log("inner called");
    }
    console.log("outer");
    inner();
    console.log("outer");
}

outer();

const obj1 = {
    outer: function(){
        function inner(){
            console.log("inner called");
        }
        console.log("outer");
        inner();
        console.log("outer");
    }
}
obj1.outer();

class Test {
    outer(){
        function inner(){
            console.log("inner called");
        }
        console.log("outer");
        inner();
        console.log("outer");
    }
}

const test1 = new Test();
test1.outer();