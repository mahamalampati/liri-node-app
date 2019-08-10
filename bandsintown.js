
 

 // Here we are building the URL we need to query the database
 var queryURL = "https://rest.bandsintown.com/artists/BlueFalseIndigo/events?app_id=codingbootcamp"

   // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);
        console.log(response.venue.name);


        
       
      });
  
