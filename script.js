var res=fetch("https://restcountries.com/v2/all").then((data)=>data.json()).then((data1)=>{
  console.log(data1);
  var div1=document.createElement("div");
  div1.setAttribute("class","container");
  var div2=document.createElement("div");
  div2.setAttribute("class","row row-cols-1 row-cols-md-3");
  for(var i=0;i<data1.length;i++){
    if(data1[i].latlng!=undefined){        
    var div3=document.createElement("div");
    div3.innerHTML=`<div class="col mb-4 col lg-4 col sm-12" >
    <div class="card">
      <div class="card-header"><b>${data1[i].name}</b></div>
      <div class="card-body">
        <img src="${data1[i].flag}" class="card-img-top">
        <h6 class="card-title">Captial : ${data1[i].capital}</h6>
        <h6 class="card-title">Region : ${data1[i].region}</h6>
        <h6 class="card-title">Country Code : ${data1[i].alpha3Code}</h6>
        <button class= "btn btn-primary" onclick="weather(${data1[i].latlng[0]},${data1[i].latlng[1]})">Click For Weather</button>
      </div>
    </div>
  </div>`;
    }

  div1.append(div2);
  div2.append(div3);
  document.body.append(div1);
  
  }
  
});
function weather(lat,lon){ 
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f2e734eeb6b03063a36b237765330d4e`)
  .then((data)=>data.json()).then((data)=>{
alert(`Temperature is ${data.main.temp}`);
  });
  }



