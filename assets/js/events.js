//API for Events
var apiKey = "nj5KONUN4S0uaXTTHiRYghioYphYVR5PmdnqqX51t9O_ZPv-vH01QfFYSgiebxMAtty3laSDhFPcU5kOLiGJtOam85gSX9PU-JG2kBcIe9Tqti87nd3SSQhN44idYXYx";

var clientID = "qaaLZvCSOXNTT-e6BUGMDg";

var city = "32832";

var apiURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";

//Get API Data and sort by zip code
//var queryURL = "https://api.yelp.com/v3/";
//var apiKey = "my key" 

// JavaScript Document
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";
//var apiKey = "my key"; 

$.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin":"*",
        "Authorization": `Bearer ${apiKey}`
     },
   success: function(result){
        console.log(result);
    }
 });