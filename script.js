/*document.getElementById("movieform").addEventListener("submit", function(event) {
  event.preventDefault();
  myURL = "https://ghibliapi.herokuapp.com/films/"
  var id = document.getElementById("movie").value;
  console.log("id is", id);
  var fullURL = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
  console.log(fullURL);

  fetch(fullURL)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      document.getElementById("github").innerHTML =
        "<strong>ID= " + json["id"] + "</strong>";
    });
});
*/

// Get list of movies
document.getElementById("box-button").addEventListener("click", function(event) {
  event.preventDefault();
  myURL = "https://ghibliapi.herokuapp.com/films/"
  console.log(myURL);

  fetch(myURL)
    .then(function(response) {
      return response.json();
    }).then(function(json) { // Write out movie names and lists
      console.log(json);
      var moviesOutput = "";
      for (var i = 0; i < json.length; i++) {
        moviesOutput += "<div class='movie'>\n<p>Movie: " + json[i]["title"] + " (" + json[i]["release_date"] + ")</p>\n"
        moviesOutput += "<ul><li>Director: " + json[i]["director"]+ "</li></ul></div>\n"
      }
      console.log(moviesOutput)
      document.getElementById("ghibli-empty-list").id = "ghibli-list";
      document.getElementById("ghibli-list-results").innerHTML = moviesOutput;
    });
});
