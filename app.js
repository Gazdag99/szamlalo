
let minus = document.getElementById("minus"); 
let plus = document.getElementById("plus"); 
let reset = document.getElementById("reset"); 
let counter = document.getElementById("count"); 

let count = 0;
counter.innerText = count; 

minus.addEventListener("click", function(){
    count -= 1;  
    counter.innerText = count;
    updateClass();
})

plus.addEventListener("click", function(){
    count += 1;
    counter.innerText = count; 
    updateClass();
})

reset.addEventListener("click", function(){
    count = 0; 
    counter.innerText = count; 
    updateClass();
})



function updateClass(){
    if (count > 0){
        document.getElementById("count").classList.add("positive")
    } else if (count < 0){
        document.getElementById("count").classList.add("negative")
    } else if (count === 0 ){
        document.getElementById("count").classList.remove("positive")
        document.getElementById("count").classList.remove("negative")
    }
}
