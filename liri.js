require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
/*------------------ my stuff after instructional stuff ---------------*/



/* ------------------- OMDB ------------------ */
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

var axios = require("axios");


axios.get(queryUrl).then(
    function (response) {
        console.log("------------MOVIE-------------")
        console.log("movie year is: " + response.data.Year);
        console.log("---------END MOVIE-------------")
        // console.log(response.data);
  })



console.log(queryUrl);

/* ------------------- END OMDB ------------------ */

/* ------------------- BANDS IN TOWN ------------------ */
/* ------------------- END BANDS IN TOWN ------------------ */