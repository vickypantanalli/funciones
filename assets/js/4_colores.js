let div1 = document.getElementById('div1')
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
let div4 = document.getElementById("div4")


const negro = (div1, color = 'black') => {
    div1.style.backgroundColor = color;
 }

div1.addEventListener("click",()=>{
    negro(div1)
})

div2.addEventListener("click", ()=>{
    negro(div2)
})

div3.addEventListener("click", ()=>{
    negro(div3)
})

div4.addEventListener("click", ()=>{
    negro(div4)
})
