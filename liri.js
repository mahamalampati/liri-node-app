require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var action = process.argv[2];
var parameter = process.argv[3];




function switchCase() {

  switch (action) {

    case 'concert-this':
      bandsInTown(parameter);                   
      break;                          

    case 'spotify-this-song':
      spotSong(parameter);
      break;

    case 'movie-this':
      movieInfo(parameter);
      break;

    case 'do-what-it-says':
      getRandom();
      break;

      default:                            
      logIt("Invalid Instruction");
      break;

  }

};

function bandsInTown(parameter){
  var bandName="";
if (action === 'concert-this')
{
  	bandName= "jackson";
	}
	

else
{
	bandName = parameter;
}



var queryURL = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";
   axios.get(queryURL).then(response => {
       
       for (var i = 0; i < response.data.length; i++) {
           var show = response.data[i].venue;
           console.log(show.city + ", " + (show.region || show.country) + " at " + show.name + " " + moment(show.datatime).format("hh:mm a, MM/DD/YYYY"));
           console.log("===========================================")
       }
   })

   .catch(function(error) {
    if (error.response) {
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
}



function spotSong(parameter) {


  var searchTrack;
  if (parameter === undefined) {
    searchTrack = "The Sign ace of base";
  } else {
    searchTrack = parameter;
  }

  spotify.search({
    type: 'track',
    query: searchTrack
  }, function(error, data) {
    if (error) {
      console.log('Error occurred: ' + error);
      return;
    } else {
      console.log("\n---------------------------------------------------\n");
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song: " + data.tracks.items[0].name);
      console.log("Preview: " + data.tracks.items[3].preview_url);
      console.log("Album: " + data.tracks.items[0].album.name);
      console.log("\n---------------------------------------------------\n");
      
    }
  });
};
function movieInfo(parameter) {


  var findMovie;
  if (parameter === undefined) {
    findMovie = "Mr. Nobody";
  } else {
    findMovie = parameter;
  };

  axios.get("http://www.omdbapi.com/?t="+ findMovie +"&y=&plot=short&apikey=trilogy").then(
  function(response) {
   
    console.log("\n---------------------------------------------------\n");
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.imdbRating);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
    console.log("\n---------------------------------------------------\n");
  })
  .catch(function(error) {
    if (error.response) {
      
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

}
 

function getRandom() {
fs.readFile('random.txt', "utf8", function(error, data){

    if (error) {
        return logIt(error);
      }

  
    var dataArr = data.split(",");
    
    if (dataArr[0] === "spotify-this-song") 
    {
      var songcheck = dataArr[1].trim().slice(1, -1);
      spotSong(songcheck);
    } 
    else if (dataArr[0] === "concert-this") 
    { 
      if (dataArr[1].charAt(1) === "'")
      {
      	var dLength = dataArr[1].length - 1;
      	var data = dataArr[1].substring(2,dLength);
      	console.log(data);
      	bandsInTown(data);
      }
      else
      {
	      var bandName = dataArr[1].trim();
	      console.log(bandName);
	      bandsInTown(bandName);
	  }
  	  
    } 
    else if(dataArr[0] === "movie-this") 
    {
      var movie_name = dataArr[1].trim().slice(1, -1);
      movieInfo(movie_name);
    } 
    
    });

};

function logIt(dataToLog) {

	console.log(dataToLog);

	fs.appendFile('log.txt', dataToLog + '\n', function(err) {
		
		if (err) return logIt('Error logging data to file: ' + err);	
	});
}


switchCase();












