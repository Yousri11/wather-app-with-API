let a=document.querySelector("#button")
const app=document.querySelector(".app")
const stat=document.querySelector(".stat")
const desc=document.querySelector(".desc")
const img=document.querySelector(".stat img")
const deg=document.querySelector(".degstat")
const w=document.querySelector(".watherstat")
a.addEventListener('click',()=>{
    const APIKey = '728b0ee6df5687559812bd3169ad77b7';
    const city =document.querySelector("#city").value;
    if(city==="")
        return ;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    fetch(url).then(res=>res.json()).then((res)=>{
        if(res.cod==='404'){
            app.style.height="400px";
            console.log(img);
            img.src="images/404.png";
            w.innerHTML="Oops ! Invalide location :/"
            img.className+=" fadein";
            deg.style.display="none";
            w.className+=" fadein";
            return ;
        }
        app.style.height="600px";

        stat.className+=" fadein";
        desc.className+=" fadein";
    })
})