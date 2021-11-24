// global var
var searchInput = $("#search-input").val();
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

function getTicket() {
  const ticketResults = fetch(apiURL).then(function (response) {
    response.json().then(function (data) {
      console.log("this contains data", data);
      ticketsArr = data;
      console.log(ticketsArr, "ticketsArr");
      console.log("apiURL", apiURL);
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

function showTickets(event) {
  event.preventDefault();
  getTicket();

  var ticketResultContainer = document.getElementById("#ticket-result");
}
