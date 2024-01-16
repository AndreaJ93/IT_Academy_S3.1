// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map((movie) => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const directorMovies = array.filter(movie => movie.director === director);
  return directorMovies;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const directorMovies = array.filter(movie => movie.director === director);
  const directorAddition = directorMovies.reduce((total, movie) => total + movie.score, 0);
  let directorAverage = Number ((directorAddition / directorMovies.length).toFixed(2));
  return directorAverage;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titleMovies = array.map(movie => movie.title);
  const titleMoviesInOrder = titleMovies.sort();
  const title20Movies = titleMoviesInOrder.slice(0, 20);
  return title20Movies;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const titleOrderMovies = array.map(movie => movie).sort((a, b) => a.title === b.title ? 0 : a.title < b.title ? -1 : 1);
  const yearAndTitleOrderMovies = titleOrderMovies.sort((a, b) => a.year - b.year);
  return yearAndTitleOrderMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const genreMovies = array.filter(movie => movie.genre.includes(genre));
  const genreAddition = genreMovies.reduce((total, movie) => total + movie.score, 0);
  let genreAverage = Number ((genreAddition / genreMovies.length).toFixed(2));
  return genreAverage;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
 const durationInMinutes = array.map(movie => {
    const durationArray = movie.duration.split(/["h"min"]+/);
    let hour = parseInt(durationArray[0]);
    let minutes = 0;

    if (durationArray[1].length === 0) {
      minutes = 0;
    } else {
      minutes = parseInt(durationArray[1]);
    }
    
    let totalDuration = hour*60 + minutes;
    return {...movie, duration: totalDuration}
 })
 return durationInMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const yearMovies = array.filter(movie => movie.year === year);
  const sortBestMovies = yearMovies.sort((a, b) => b.score - a.score);
  const BestMovie = [sortBestMovies[0]]
  return BestMovie;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
