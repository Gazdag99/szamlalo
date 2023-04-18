
let minus = document.getElementById("minus"); 
let plus = document.getElementById("plus"); 
let reset = document.getElementById("reset"); 
let counter = document.getElementById("count"); 
let count = document.getElementById("count").value; 

minus.addEventListener("click", function(){
    count - 1; 
})

plus.addEventListener("click", function(){
    count + 1; 
})

reset.addEventListener("click", function(){
    count = 0; 
})

