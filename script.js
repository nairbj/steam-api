document.getElementById("movieform").addEventListener("submit", function(event) {
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

// Get list of movies
document.getElementById("ghibli-list").addEventListener("click", function(event) {
  event.preventDefault();
  myURL = "https://ghibliapi.herokuapp.com/films/"
  console.log(myURL);

  fetch(myURL)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
    });
});
