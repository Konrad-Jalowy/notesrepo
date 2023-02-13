(function(str1, str2){
    console.log(`${str1} ${str2}`);
})("Hello", "World");

(function(str1){
    console.log(`${str1} ${this.str2}`);
}).call({str2: "World"}, "Hello");