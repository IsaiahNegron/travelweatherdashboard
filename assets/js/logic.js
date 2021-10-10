var searchButtonEl = document.querySelector(".btn");
var cityNameInput = document.querySelector("#search");
var icon = document.querySelector(".icon");
var humidity = document.querySelector(".humidity");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var uvIndex = document.querySelector(".index");
var geoBaseUrl = "http://api.openweathermap.org/geo/1.0/direct?q=";
var geoEndUrl = "&limit=5&appid=d1d4775eb8ccb43358d90f15b59711df";




//this is the button function!!
// var formSubmitHandler = function(event) {
//     //Prevents page from refreshing
//     event.preventDefault();
//     // get value from input element
//     console.log(event.target);

// //button event listener
// citySearch.addEventListener("click", formSubmitHandler);

https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=

//this code works!

// searchButtonEl.addEventListener("click",function(){
//     fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityNameInput.value +"&units=imperial&appid=d1d4775eb8ccb43358d90f15b59711df")
//     .then(response => response.json())
//     .then(data => console.log(data.coord))

//     .catch(err => alert("Wrong City Name, Check Your Spelling"))

// });

function getWeatherInfo(cityNameInput){

  fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityNameInput + "&limit=5&appid=d1d4775eb8ccb43358d90f15b59711df")
  .then(response => response.json())
  .then(data => console.log(data[0].lat))

  .catch(err => alert("wrong info"));

}

searchButtonEl.addEventListener("click", getWeatherInfo(cityNameInput));



// async function getCoords(){
//     var response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityNameInput.value +"&units=imperial&appid=d1d4775eb8ccb43358d90f15b59711df");
//     var lat = await data[0].lat;
// };

// searchButtonEl.addEventListener('click', function(){
    // $.getJSON("http://api.openweathermap.org/geo/1.0/direct?q=" + cityNameInput.value + "&limit=5&appid=d1d4775eb8ccb43358d90f15b59711df",
    // function(data){
    //     console.log(data);
        

//         getWeatherInfo(data)
//     })
// });

// var lat = data[0].lat;
// var lon = data[0].lon;

// var getWeatherInfo = function(data){
//     fetch("https://api.openweathermap.org/data/2.5/onecall?" + lat + "&" + lon "&exclude=hourly,daily&appid=d1d4775eb8ccb43358d90f15b59711df")
//     .then(response => response.json())
//     .then(data => console.log(data))

//     .catch(err => alert("Wrong City Name, Check Your Spelling"))
// };