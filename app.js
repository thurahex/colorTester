const color = document.querySelector("#color")
const Box = document.querySelector(".colorBox")
const bd = document.body
const h1 = document.querySelector(".head")
const p = document.querySelector("#demo")
const ftCrd = document.querySelector("#ftCrd")
const crd = document.querySelector("#crd")
const guideBtn = document.querySelector(".guide-btn")
const closeBtn = document.querySelector(".close-btn")
const guide = document.querySelector(".guide")
console.log(color.value)
window.addEventListener("click", () =>{
    p.innerHTML=color.value
    
})

function show(){
    let selectColor = color.value
    p.style.color="black"
    p.innerHTML=selectColor
    

}
function colorrt(){
    return color.value
}
function addColorBox(){
    const div = document.createElement("div")
    const divCon =document.createTextNode(colorrt())
    div.appendChild(divCon)
    div.classList.add("color-box")
    div.style.backgroundColor=colorrt()
    
    Box.appendChild(div)
    console.log(colorrt())
    p.style.color=colorrt

}
function changeBg(){
    bd.style.backgroundColor=colorrt()
    p.innerHTML=color.value
    if(colorrt()==="#000000"){
        h1.style.color="white"
        p.style.color="white"
        crd.style.color="#08dd16"
        ftCrd.style.color="white"
        
    }
    else if(colorrt()==="#ffffff"){
        h1.style.color="#08dd16"
        p.style.color="black"
        crd.styel.color="#08dd16"
        ftCrd.style.color="black"
    }
    else{
        h1.style.color="black"
        p.style.color="black"
        crd.style.color="white"
    }
}
function crdCol(){
    crd.style.color=colorrt()
    p.innerHTML=colorrt()
    h1.style.color=colorrt()
}
function openGuide(){
    guide.style.height="500px"
    guide.style.padding="20px"
}
function closeGuide(){
    guide.style.height="0"
    guide.style.padding="0"
}