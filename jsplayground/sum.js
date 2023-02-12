function sumAll(...nums){
    let cnt = 0;
    nums.forEach((num) => {
        cnt += num;
    });
    return cnt;
}

console.log(sumAll(1,10,-25,15,-9,18,21,-7,123));