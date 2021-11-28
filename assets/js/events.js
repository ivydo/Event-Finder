//------------------------------------------------
// global var
//------------------------------------------------
// var searchInput = $("#search-input").val();
var searchInput = "";
// empty arrays to store data
var ticketsArr = [];

var listDivEl = document.querySelector('#listDiv');
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
var eventUrls = [];

//------------------------------------------------
//API for Events
//------------------------------------------------
var apiKey = "HHCvi5HdAGUQ3rfG7A1ajPyCCVYaKmYj";
var apiURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=${searchInput}`;

// var OpenTripAPIKey = "5ae2e3f221c38a28845f05b62cf81c4f59366e1cca6085deda3ca948";
// var OpenTripapiURL =
//   "http://api.opentripmap.com/0.1/en/places/xid/Q372040?apikey=" +
//   OpenTripAPIKey +
//   "&name=orlando";

//------------------------------------------------
//Functions
//------------------------------------------------

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
  var events = data._embedded.events;

  for (let i = 0; i < 10; i++) {
    var eventListItems = events[i];
    var eventName = ticketsArr._embedded.events[i].name;

    eventUrls.push(ticketsArr._embedded.events[i].url);
  
    var rowEl = document.createElement("div");
    rowEl.classList = "event-row";
    rowEl.id = "eventRow-"+i;

    listDivEl.appendChild(rowEl);

    var eventNameEl = document.createElement("h2");
    eventNameEl.classList = "event-Name";
    eventNameEl.textContent = eventName;
    eventNameEl.id = "eventName-"+i;

    var favoriteButtonEl = document.createElement("button");
    favoriteButtonEl.classList = "favorite-btn"
    favoriteButtonEl.textContent = "Favorite"
    favoriteButtonEl.id = "favoriteBtn-"+i;

    var buyButtonEl = document.createElement("button");
    buyButtonEl.textContent = "Buy Tickets"
    buyButtonEl.classList = "buy-btn"
    buyButtonEl.id = "buyBtn-"+i;

    rowEl.appendChild(eventNameEl);

    rowEl.appendChild(favoriteButtonEl);
    rowEl.appendChild(buyButtonEl);


  }
  if (ticketsArr.length === 0) {
    var errorAlert = `<p>Nothing nearby :( </p>`;
    $("#listDiv").append(errorAlert);
  }
}

//Save Favorite
var saveFavorite = function(eventName) {

  const eventInfo = {
    eventTitle: eventName,
  }

  favorites.push(eventInfo);

  localStorage.setItem("favorites", JSON.stringify(favorites));

}

//------------------------------------------------
//Event Listeners
//------------------------------------------------
$(document).on("click", ".favorite-btn", function() {

  var btnName = $(this).attr('id').split('-')[1];

  var text = $("#eventName-" + btnName).text();

  saveFavorite(text);
});

$(document).on("click", ".buy-btn", function(){

  var btnName = $(this).attr('id').split('-')[1];

  var selectedUrl = eventUrls[btnName];

  window.open(selectedUrl);
});

