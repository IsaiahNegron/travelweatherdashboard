var searchButtonEl = document.querySelector(".btn");
var cityNameInput = document.querySelector("#city-search");
var icon = document.querySelector(".icon");
var humidity = document.querySelector(".humidity");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var uvIndex = document.querySelector(".index");

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
    // .then(response => response.json())
    // .then(data => console.log(data))

    // .catch(err => alert("Wrong City Name, Check Your Spelling"))

// });

// searchButtonEl.addEventListener('click', function(){
//     $.getJSON("http://api.openweathermap.org/geo/1.0/direct?q=" + cityNameInput.value + "&limit=5&appid=d1d4775eb8ccb43358d90f15b59711df",
//     function(data){
//         console.log(data);
        

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




    



// $.getJSON(
//     "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&units=imperial&appid=d1d4775eb8ccb43358d90f15b59711df",
//     function(data){

        // var icon =  "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        // var temp = data.main.temp + ("°F");
        // var humidity = data.main.humidity + ("%");
        // var wind = data.wind.speed + (" MPH");
        // // var index = data.
    
        // $(".icon").attr("src", icon);
        // $(".temp").append(temp);
        // $(".humidity").append(humidity);
        // $(".wind").append(wind);

//     }
// );

