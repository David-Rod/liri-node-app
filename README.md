LIRI-NODE-APP created by David Rodriguez

Technologies Used: Node.js, npm packages: request, node-spotify-api, twitter.

This application is meant to operate strictly as a node.js application. The purpose was to construct an application that executes commands given by the user. The capability of this application is simple, completing three tasks:

    1. This application will display the last 20 tweets from the Twitter account associated with the application. To accomplish this, run "node liri.js my-tweets".

    2. When the user enters "node liri.js spotify-this-song <'song name'>", song data will be displayed in the console.

    3. The final piece of functionality will retrieve movie information based on user input. A request is sent to the OMDB API when the user enters "node liri.js movie-this <'movie name'>".

The most difficult part was retrieving the correct objects to display information outlined in the assignment. Testing in node remains slightly difficult because the results are not visible outside of the console. Initially it was difficult to import the API keys for Twitter, Spotify, and OMDB. Once I was able to utilize the npm packages properly, adding the keys to the page became an easy task. 

There are still improvements to be made for this application. I would like to implement more functionality when retrieving the API data logged to the console. I would love any feedback that would allow me to improve the efficiency of this application.