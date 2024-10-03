"use strict";

function getMovieInfo() {
  var title = document.getElementById("movieTitle").value;

  if (!title) {
    alert("Enter a movie name");
    return;
  }

  fetch("https://www.omdbapi.com/?t=".concat(title, "&apikey=a9d648cf")).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.Response === 'False') return alert('Movie not found!');
    document.getElementById('movieName').textContent = data.Title;
    document.getElementById('movieRating').textContent = "Rating: ".concat(data.imdbRating);
    document.getElementById('movieYear').textContent = "Year: ".concat(data.Year);
    document.getElementById('movieCard').style.display = 'block';
  })["catch"](function (error) {
    return alert('Error fetching movie data.');
  });
}