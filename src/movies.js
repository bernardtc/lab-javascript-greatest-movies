// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map(allDirectors => allDirectors.director);
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergMovies = 0;
    const dramaMovies = moviesArray.filter(spielberg => spielberg.director);
    const genreMovies = moviesArray.filter(drama => drama.genre);
    if(dramaMovies === []){
        return 0
    } else if(dramaMovies !== "Steven Spielberg"){
        return 0
    } else if(genreMovies === "Drama"){
        return genreMovies;
    } 
    else{spielbergMovies++}
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const moviesAverage = moviesArray.reduce((movie1, movie2) => (movie1.score + movie2.score)/2);
    if(moviesArray === [""] ){
        return 0
    } else if(moviesAverage >= 8){
        return moviesAverage
    } else{
        return moviesAverage
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.map(justDramaMovies => justDramaMovies.genre);
    const dramaAverage = dramaMovies.reduce((finalAverage, average) => (finalAverage + average)/dramaMovies.length);
    if(dramaAverage.genre === ['Drama']){
        return dramaAverage
    }
    return dramaAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesByYear = moviesArray.filter(function (yearOfMovie){
    return yearOfMovie.year});
    const sortByTitle = moviesByYear.sort(function (a, b) {
        return a - b;
      })
     
    sortByTitle.sort(function (a, b) {
        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;
        if(a.title === b.title) return 0;
      })
      return sortByTitle;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesByTitle = moviesArray.map(title => title.title);
    const sortTitles = moviesByTitle.sort(function (a, b){
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        if (a.toLowerCase() === 0) return 0;
    });
    return sortTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
