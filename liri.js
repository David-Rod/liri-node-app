var Twitter = require("twitter");
var requiredKeys = require("./keys");

var userInput = process.argv[2];

var myTweet = function () {
    console.log("mytweet");
    var client = new Twitter(requiredKeys.twitterKeys);

    var params = { screen_name: "DavidRod93" };
    client.get("statuses/user_timeline", params, function(
      error,
      tweets,
      response
    ) {
      if (!error) {
          var twentyOrLess = tweets.length <=20 ? tweets.length : 20; 

          for( var i = 0; i < twentyOrLess; i++) {
              console.log(tweets[i].text, tweets[i].created_at);
          }
        console.log(tweets[0].text, tweets[0].created_at);
      }
    });
};

var spotifySong = function () {
	var Spotify = require('node-spotify-api');

var spotify = new Spotify(requiredKeys.spotifyKeys);

spotify.search({
                type: 'track',
    query: 'All the Small Things'
}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});
};

var movieThis = function () {
	console.log("moviethis");
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

// var client = new Twitter({
//     consumer_key: 'h0ksp14BkDFLXmStTnLIIqjqW',
//     consumer_secret: '	41CIkzWcNptzyGWbMUKhWL2JeLsBJkrqsZ9v86gOsMzJR6xATX',
//     access_token_key: '953053674430844928-Yc8QebJ4ZpsqBcS8m8s8WjVOBZOKcLd',
//     access_token_secret: 'FWj7Ehu1JUgEJGpr3yO8fCLX0PbX3TArK5zESM505qJjX'
// });

// var params = {
//     screen_name: 'nodejs'
// };
// client.get('statuses/user_timeline', params, function (error, tweets, response) {
//     if (!error) {
//         console.log(tweets);
//     }
// });



// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//                 console.log('error:', error); // Print the error if one occurred
//             console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });