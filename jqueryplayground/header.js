// $("#header1").on("click", function(){
//     this.style.backgroundColor = 'orange';
//     $(this).off("click", this);
// });

$("#header1").on("click", function(){
    $(this).css('background-color', 'orange');
    $(this).off("click", this);
});