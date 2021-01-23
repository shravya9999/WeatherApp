/*Weather App*/
var loc=document.querySelector('.name');
var tempicon=document.getElementById("temp-icon");
var tempValue=document.querySelector('.temp');
var desc=document.querySelector('.type');
let iconfile;
var image=document.getElementById("image");
var button=document.querySelector('.button');
var inputValue=document.querySelector('.InputValue');
var pressurevalue=document.querySelector('.pressure');
var windValue=document.querySelector('.wind');
var x=document.querySelector('.da');
var weeks={
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday",
    0:"Sunday"
};
button.addEventListener('click',function(){
    if (location.protocol === 'http:'){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e98a05a5a6bacd014dafbcf7515001b4')}
    else{
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e98a05a5a6bacd014dafbcf7515001b4')}
    .then(res=> res.json())
    .then(data=>{
        
        console.log(data);
        var d=new Date();
        x.innerHTML=weeks[d.getDay()]+","+d.getDate();
        loc.innerHTML=data['name']+","+data['sys']['country'];
        tempValue.innerHTML=Math.round(data['main']['temp']-273)+'\u00B0'+"C";
        desc.innerHTML=data['weather'][0]['main'];
        pressurevalue.innerHTML=data['main']['pressure']+"Pa";
        windValue.innerHTML=data['wind']['speed']+"km/h";
        let id=data['weather'][0]['id'];
        if(id>=200 && id<300){
            tempicon.src="./images/icons/thunderstrom.svg"
            document.body.style.backgroundImage="url('./images/thunder.jpg')";
        }
        else if(id>=300 && id<500)
        {
            tempicon.src="./images/icons/drizzle.svg"
            document.body.style.backgroundImage="url('./images/drizzle.jpg')";
        }
        else if(id>=500 && id<600){
            tempicon.src="./images/icons/rain.svg"
            document.body.style.backgroundImage="url('./images/rain.jpg')";
        }
        else if(id>=600 && id<=700){
            tempicon.src="./images/icons/snowing.svg"
            document.body.style.backgroundImage="url('./images/snow.jpg')";
        }
        else if(id>700 && id<=720){
            tempicon.src="./images/icons/mist.svg"
            document.body.style.backgroundImage="url('./images/snow.jpg')";
        }
        else if(id>720 && id<731)
        {
            tempicon.src="./images/icons/haze.svg"
            document.body.style.backgroundImage="url('./images/haze.jpg')";
        }
        else if(id>730 && id<=740 || id==761)
        {
            tempicon.src="./images/icons/dust.svg"
            document.body.style.backgroundImage="url('./images/fog.jpg')";
        }
        else if(id>740 && id<800){
            tempicon.src="./images/icons/tornado.svg"
            document.body.style.backgroundImage="url('./images/fog.jpg')";
        }
        else if(id==800)
        {
            tempicon.src="./images/icons/sky.svg"
            document.body.style.backgroundImage="url('./images/clear.jpg')";
        }
        else{
            tempicon.src="./images/icons/cloud.svg"
            document.body.style.backgroundImage="url('./images/cloud.jpg')";
        }
        
    })
    .catch(err =>{
        console.log("Error");
        alert("City not found");
        alert("Enter valid city name")
        loc.innerHTML="----";
        tempValue.innerHTML="---"+'\u00B0'+"C";
        desc.innerHTML="---";
        pressurevalue.innerHTML="----"+"Pa";
        windValue.innerHTML="---"+"km/h";
        tempicon.src="./images/icons/sun.svg"
        document.body.style.backgroundImage="url('./images/space.jpg')";
        })
})
