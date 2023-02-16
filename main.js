let a=document.querySelector("#button")
const app=document.querySelector(".app")
const stat=document.querySelector(".stat")
const desc=document.querySelector(".desc")
a.addEventListener('click',()=>{
    app.style.height="600px";
    stat.className+=" fadein";
    desc.className+=" fadein";
})