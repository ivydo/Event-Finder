// global var
// var searchInput = $("#search-input").val();
var searchInput = "";
// empty arrays to store data
var ticketsArr = [];

//API for Events
var apiKey = "HHCvi5HdAGUQ3rfG7A1ajPyCCVYaKmYj";
var apiURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=${searchInput}`;

// var OpenTripAPIKey = "5ae2e3f221c38a28845f05b62cf81c4f59366e1cca6085deda3ca948";
// var OpenTripapiURL =
//   "http://api.opentripmap.com/0.1/en/places/xid/Q372040?apikey=" +
//   OpenTripAPIKey +
//   "&name=orlando";

function getTickets(event) {
  event.preventDefault();
  searchInput = $("#search-input").val();
  apiURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=${searchInput}`;
  fetch(apiURL).then(function (response) {
    response.json().then(function (data) {
      console.log("this contains data", data);
      ticketsArr = data;
      console.log(ticketsArr, "ticketsArr");
      console.log("apiURL", apiURL);
      showTickets(data);
    });
  });
}

// function getTrip() {
//     fetch(OpenTripapiURL).then(function(response) {
//         response.json().then(function(dataTrip) {
//             console.log(dataTrip);
//         });
//     });
// }

// getTicket();
// getTrip();

function showTickets(data) {
  console.log(data);
  var events = data._embedded.events;
  console.log(events);

  for (let i = 0; i < 10; i++) {
    var eventListItems = events[i];
    console.log("eventListItems");
    var eventName = ticketsArr._embedded.events[i].name;
    var eventsLi = `
    <button type="button">${eventName}</button>`;
    $("#listDiv").append(eventsLi);
  }
  if (ticketsArr.length === 0) {
    var errorAlert = `<p>Nothing nearby :( </p>`;
    $("#listDiv").append(errorAlert);
  }
}
