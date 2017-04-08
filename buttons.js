
var apiD = 'bf88f55cd4a723193f4a14bf2e064918';

document.addEventListener('DOMContentLoaded', bindButton1);
document.addEventListener('DOMContentLoaded', bindButton2);
function bindButton1(){
	document.getElementById('zipSubmit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var payload = document.getElementById("zip").value;
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+ payload +",us&units=imperial&appid=" + apiD, true);
    req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);
        //console.log(response);
        document.getElementById("DisplayCity").textContent = response.name;
        document.getElementById("CurTemp").textContent = response.main.temp;
        document.getElementById("CurWeather").textContent = response.weather[0].description;
        document.getElementById("WindSpeed").textContent = response.wind.speed;
      } else {
        console.log("Error in network request: " + req.statusText);
      }});
    req.send(null);
    event.preventDefault();
    
  });
    
};

function bindButton2(){
	document.getElementById('citySubmit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var payload = document.getElementById("city").value;
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+ payload +",us&units=imperial&appid=" + apiD, true);
    req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);
        //console.log(response);
        document.getElementById("DisplayCity").textContent = response.name;
        document.getElementById("CurTemp").textContent = response.main.temp;
        document.getElementById("CurWeather").textContent = response.weather[0].description;
        document.getElementById("WindSpeed").textContent = response.wind.speed;
      } else {
        console.log("Error in network request: " + req.statusText);
      }});
    req.send(null);
    event.preventDefault();
    
  });
    
};

