var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var requiredKeys = require("./keys");

var userInput = process.argv[2];

var myTweet = function () {

  var client = new Twitter({
    consumer_key: requiredKeys.twitterKeys.consumer_key,
    consumer_secret: requiredKeys.twitterKeys.consumer_secret,
    access_token_key: requiredKeys.twitterKeys.access_token_key,
    access_token_secret: requiredKeys.twitterKeys.access_token_secret
  });

  var params = {
    screen_name: "Gravy_Davy"
  };
  client.get("statuses/user_timeline", params, function (
    error,
    tweets,
    response
  ) {
    if (!error) {


      var twentyOrLess = tweets.length <= 20 ? tweets.length : 20;

      for (var i = 0; i < twentyOrLess; i++) {
        console.log(tweets[i].text, tweets[i].created_at);
        console.log("------------------------------------------------------------------------------------------------");
      }
      console.log(tweets[0].text, tweets[0].created_at);
    } else {
      console.log(error);
    }
  });
};

var spotifySong = function () {

  var spotify = new Spotify({
    id: requiredKeys.spotifyKeys.id,
    secret: requiredKeys.spotifyKeys.secret
  });

  spotify.search({
    type: 'track',
    query: 'Pour Some Sugar On Me'
  }, function (err, data) {

    var logSongData = function () {
      console.log("Artist name: " + data.tracks.items[0].artists[0].name);
      console.log("---------------");
      console.log("Song name: " + data.tracks.items[0].name);
      console.log("---------------");
      console.log("Album name: " + data.tracks.items[0].album.name);
      console.log("---------------");
      console.log("Here is an external link to listen to this song: " + data.tracks.items[0].album.external_urls.spotify);
    };

    if (err) {
      return console.log('Error occurred: ' + err);
    }
    logSongData();
  });

};

var movieThis = function () {
  var movieInfo = process.argv[3].replace(/ +/g, '-').toLowerCase();
  var apiURL = "http://www.omdbapi.com/?t=" + movieInfo + "&apikey=" + requiredKeys.omdbKey.apiKey;


  request(apiURL, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log("Movie title: " + JSON.parse(body).Title); // Print the HTML for the Google homepage.
    console.log("------------------------------------------------------------------------------------");
    console.log("Release year: " + JSON.parse(body).Year);
    console.log("------------------------------------------------------------------------------------");
    console.log("IMDB rating: " + JSON.parse(body).Ratings[0].Value);
    console.log("------------------------------------------------------------------------------------");
    console.log("Rotten Tomatoes rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("------------------------------------------------------------------------------------");
    console.log("Country origin: " + JSON.parse(body).Country);
    console.log("------------------------------------------------------------------------------------");
    console.log("Movie plot: " + JSON.parse(body).Plot);
    console.log("------------------------------------------------------------------------------------");
    console.log("Cast members: " + JSON.parse(body).Actors);

    // var movieData = function (data) {
    //   console.log(JSON.parse(body).data);
    // }

    // movieData(Year);

  });
};

var doWhatItSays = function () {
  console.log("do what it says");
};

if (userInput === "my-tweets") {
  myTweet();
} else if (userInput === "spotify-this-song") {
  spotifySong();
} else if (userInput === "movie-this") {
  movieThis();
} else if (userInput === "do-what-it-says") {
  doWhatItSays();
}