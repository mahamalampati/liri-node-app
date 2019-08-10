# liri-node-app

LIRI BOT

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

What Each Command Does

node liri.js concert-this < band name here>

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

    Name of the venue

    Venue location

    Date of the Event (use moment to format this as "MM/DD/YYYY")

![image](https://user-images.githubusercontent.com/50805302/62825979-d6c23700-bb79-11e9-9992-ba587d403cef.png)

If no band is provided then your program will default to "jackson".

![image](https://user-images.githubusercontent.com/50805302/62826179-b2b42500-bb7c-11e9-9186-d901e73a0a56.png)



node liri.js spotify-this-song ''

This will show the following information about the song in your terminal/bash window

    Artist(s)

    The song's name

    A preview link of the song from Spotify

    The album that the song is from.

![image](https://user-images.githubusercontent.com/50805302/62826231-84831500-bb7d-11e9-847b-f4938d2768cb.png)
    

If no song is provided then your program will default to "The Sign" by Ace of Base.

![image](https://user-images.githubusercontent.com/50805302/62826246-b6947700-bb7d-11e9-9980-6ccfe708b815.png)


node liri.js movie-this ''

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.

  ![image](https://user-images.githubusercontent.com/50805302/62826259-ea6f9c80-bb7d-11e9-9da9-5a0cbacff5af.png)

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

![image](https://user-images.githubusercontent.com/50805302/62826268-2145b280-bb7e-11e9-9018-bcc68a61eec1.png)


node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. 

![image](https://user-images.githubusercontent.com/50805302/62826388-36bbdc00-bb80-11e9-89a4-c9be8a284fde.png)

![image](https://user-images.githubusercontent.com/50805302/62826413-aaf67f80-bb80-11e9-95ab-5701f0c4ed7e.png)

