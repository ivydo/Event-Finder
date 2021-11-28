var formEl = document.querySelector("#form");
var cityname = document.querySelector ("#cityname")
var city = document.querySelector ("#city")
var today = document.querySelector ("#today")
var icon = document.querySelector ("#icon")
var temp = document.querySelector ("#temp")
var wind = document.querySelector ("#wind")
var humidity = document.querySelector ("#humidity")
var uv = document.querySelector ("#uv")
var weathericon = document.querySelector ("#icon")


var formSubmitHandler = function(event) {
    event.preventDefault();
    var displaycity = cityname.value.trim()
    city.textContent = displaycity
    console.log ("Eefee")
//     var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9a5fdca9a71d82a27d3bad8acdad7812";
//     console.log(apiUrl)
//     fetch(apiUrl).then(function(response) {
//         if (response.ok) {
//             response.json().then(function(data) {
//             cityname.textContent = city;
//             today.textContent = moment().format('L, h:mm a');
//             temp.textContent ="Temperature: " + data['main']['temp'] + " °F";
//             wind.textContent = "Wind: " + data['wind']['speed'] + " MPH"; 
//             humidity.textContent = "Humidity: " + data['main']['humidity'] + " %";
//             console.log (data)
//             });
//         }
//         else {
//             cityResultEl.textContent = "No City Found!"
//         }
// });
}


formEl.addEventListener("submit", formSubmitHandler);

// var cityResultEl = document.querySelector("#city-result");
// var today = document.querySelector ("#today")
// var icon = document.querySelector ("#icon")
// var temp = document.querySelector ("#temp")

// var wind = document.querySelector ("#wind")
// var humidity = document.querySelector ("#humidity")
// var uv = document.querySelector ("#uv")
// var weathericon = document.querySelector ("#icon")

// var formSubmitHandler = function(event) {
//     event.preventDefault();
//     var city = cityInputEl.value.trim()
//     cityInputEl.textContent = city
//     var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9a5fdca9a71d82a27d3bad8acdad7812";

//     fetch(apiUrl).then(function(response) {
//           if (response.ok) {
//             response.json().then(function(data) {
//               cityname.textContent = city;
//               today.textContent = moment().format('L, h:mm a');

              
//               var iconEl = document.createElement ("img");
//               iconEl.src = "http://openweathermap.org/img/wn/" + data['weather']["0"]['icon'] + "@2x.png"
//               icon.appendChild(iconEl);

//               temp.textContent ="Temperature: " + data['main']['temp'] + " °F";
//               wind.textContent = "Wind: " + data['wind']['speed'] + " MPH"; 
//               humidity.textContent = "Humidity: " + data['main']['humidity'] + " %";
            
//               var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data['coord']['lat'] + "&lon=" + data['coord']['lon'] + "&appid=9a5fdca9a71d82a27d3bad8acdad7812"

//             fetch(uvUrl).then(function(currentinfo) {
//               if (currentinfo.ok) {
//               currentinfo.json().then(function(uvinfo) {
//                 uv.textContent = "UV Index: " + uvinfo['current']['uvi']
              
//               })
//             }
//             })
//             });
//           }
//           else {
//               cityResultEl.textContent = "No City Found!"
//           }
//           })
//         }
