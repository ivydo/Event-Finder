//API for Events

var apiKey = "HHCvi5HdAGUQ3rfG7A1ajPyCCVYaKmYj";

var OpenTripAPIKey = "5ae2e3f221c38a28845f05b62cf81c4f59366e1cca6085deda3ca948";

var apiURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=HHCvi5HdAGUQ3rfG7A1ajPyCCVYaKmYj&city=orlando";

var OpenTripapiURL = "http://api.opentripmap.com/0.1/en/places/xid/Q372040?apikey=" + OpenTripAPIKey + "&name=orlando";

function getTicket() {
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
}

function getTrip() {
    fetch(OpenTripapiURL).then(function(response) {
        response.json().then(function(dataTrip) {
            console.log(dataTrip);
        });
    });
}


getTicket();
getTrip();