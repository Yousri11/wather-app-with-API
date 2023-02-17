let a=document.querySelector("#button")
const app=document.querySelector(".app")
const stat=document.querySelector(".stat")
const desc=document.querySelector(".desc")
const img=document.querySelector(".stat img")
const deg=document.querySelector(".degstat")
const w=document.querySelector(".watherstat")
const wather=document.querySelector('.watherstat')
const hum_per=document.querySelector('.hum-per')
const wind=document.querySelector('.wind-speed')
a.addEventListener('click',()=>{
    const APIKey = '728b0ee6df5687559812bd3169ad77b7';
    const city =document.querySelector("#city").value;
    if(city==="")
        return ;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    fetch(url).then(res=>res.json()).then((res)=>{
        if(res.cod==='404'){
            app.style.height="400px";
            desc.style.display="none"
            img.src="images/404.png";
            w.innerHTML="Oops ! Invalide location :/"
            img.className+=" fadein";
            deg.style.display="none";
            w.className+=" fadein";
            return ;
        }
        deg.style.display="block";
        
        desc.style.display="flex"
        app.style.height="600px";
        if(res.weather[0].main==="Clear") img.src="images/clear.png";
        else if(res.weather[0].main==='Clouds') img.src="images/cloud.png";
        else if(res.weather[0].main==='Haze') img.src="images/mist.png";
        else if(res.weather[0].main==='Rain') img.src="images/rain.png";
        else if(res.weather[0].main==='Snow') img.src="images/snow.png";
        img.className+=" fadein";
        w.className+=" fadein";
        deg.className+=" fadein";
        stat.className+=" fadein";
        desc.className+=" fadein";
        deg.innerHTML=res.main.temp;
        wather.innerHTML=res.weather[0].description
        hum_per.innerHTML=res.main.humidity+" % ";
        wind.innerHTML=res.wind.speed+" Km/h";
        return '';
    })
})