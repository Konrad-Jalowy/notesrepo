function sum1(){
    let cnt = 0;
    arguments.forEach((arg) => {
        cnt+=arg;
    });
    return cnt;
}

function sum2(...args){
    let cnt = 0;
    args.forEach((arg) => {
        cnt +=arg;
    });
    return cnt;
}
console.log(sum1(1,2,3));
console.log(sum2(1,2,3));

function sum3() {
    cnt = 0;
    args = Array.from(arguments);
    args.forEach((arg) => {
        cnt += arg;
    });
    return cnt;
}

console.log(sum3(1,2,3));