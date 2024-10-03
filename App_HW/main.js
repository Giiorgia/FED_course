function getMovieInfo() {
    const title = document.getElementById("movieTitle").value
    if (!title){
        alert("Enter a movie name");
        return;
    }

fetch(`https://www.omdbapi.com/?t=${title}&apikey=a9d648cf`)
.then(response => response.json())
.then(data => {
    if (data.Response === 'False') return alert('Movie not found!');

    document.getElementById('movieName').textContent = data.Title;
    document.getElementById('movieRating').textContent = `Rating: ${data.imdbRating}`;
    document.getElementById('movieYear').textContent = `Year: ${data.Year}`;

    document.getElementById('movieCard').style.display = 'block';
})
.catch(error => alert('Error fetching movie data.'));
}