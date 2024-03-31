const btn = document.querySelector(".increase");
const val = document.querySelector("#value");
const btn2 = document.querySelector(".decrease");
const btn1 = document.querySelector(".reset");

btn.addEventListener("click", () => {
    val.innerText++;
    if(val.innerText>0){
        val.style.color = "green";
    }else if(val.innerText == 0){
        val.style.color = "black";
    }
});

btn1.addEventListener("click",()=>{
    val.innerHTML = 0;
    val.style.color="black";
});

btn2.addEventListener("click",()=>{
    val.innerText--;
    if(val.innerText<0){
        val.style.color = "red";
    }else if(val.innerText == 0){
        val.style.color = "black";
    }
});

// My name is sanjiwan