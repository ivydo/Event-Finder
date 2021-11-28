//------------------------------------------------
// Global Variables
//------------------------------------------------
var formEl = document.querySelector("#form");
var cityname = document.querySelector ("#citySearch")
var city = document.querySelector ("#city")
var today = document.querySelector ("#today")
var icon = document.querySelector ("#icon")
var temp = document.querySelector ("#temp")
var wind = document.querySelector ("#wind")
var humidity = document.querySelector ("#humidity")
var uv = document.querySelector ("#uv")
var weathericon = document.querySelector ("#icon")

//------------------------------------------------
// Functions for API
//------------------------------------------------
var formSubmitHandler = function(event) {
    var displaycity = cityname.value.trim()
    city.textContent = displaycity;
    today.textContent = moment().format('L, h:mm a');

    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + displaycity + "&units=imperial&appid=9a5fdca9a71d82a27d3bad8acdad7812";
    
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                temp.textContent ="Temperature: " + data['main']['temp'] + " °F";
                wind.textContent = "Wind: " + data['wind']['speed'] + " MPH"; 
                humidity.textContent = "Humidity: " + data['main']['humidity'] + " %";
                var iconEl = document.createElement ("img");
                 iconEl.src = "http://openweathermap.org/img/wn/" + data['weather']["0"]['icon'] + "@2x.png"
                 icon.appendChild(iconEl);
            })
        }
        else {
            cityname.textContent = "No City Found!"
        }
});
}

//------------------------------------------------
//Event Listeners
//------------------------------------------------
searchBtnEl.addEventListener("click", function() {
    event.preventDefault();
  
      console.log(cityname.value)
      if (cityname.value === "" || cityname.value === " " || cityname.value === null)  {
         
      } else {
          city = cityname.value;
          formSubmitHandler();
          cityname.value = "";
      }
  });
