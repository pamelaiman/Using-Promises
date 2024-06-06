/**
 * THE PROMPT DOES NOT SHOW THE "MOVIENAME" OF THE MOVIES AFTER TYPING ACTOR NAME
 * TO FIX THIS WHEN I HAVE THE TIME
 */

const { makeDBConnectionPool } = require("./moviesConnection.js");
const prompt = require('prompt'); // Ensure you have the 'prompt' library installed

const pool = makeDBConnectionPool("SupaBase1");

pool.query("select * from movies").then((resultFromPromise) => {
  displayMovies(resultFromPromise.rows);
  promptForSearchTerm().then(({ searchTerm }) => {
    queryDBForMatchingMovies(pool, searchTerm).then((result) => {
      showMovies(searchTerm, result.rows);
    });
  });
});

function displayMovies(allMovies) {
  for (let movie of allMovies) {
    console.log(movie.moviename + " made in " + movie.year);
  }
}

function queryDBForMatchingMovies(pool, searchTerm) {
  const searchTermWithWildCards = "%" + searchTerm + "%";
  return pool.query(
    `SELECT * FROM movies 
     WHERE actorone ILIKE $1 
        OR actortwo ILIKE $1 
        OR actorthree ILIKE $1`, 
    [searchTermWithWildCards]
  );
}

function promptForSearchTerm() {
  return prompt.get({
    name: "searchTerm",
    description: "Enter actor name",
    type: "string",
    required: true
  });
}

function showMovies(searchTerm, rows) {
  console.log(
    "Here are the movies matching the search term: " + searchTerm,
    rows,
  );

  console.log(rows);
  const simplifiedMovieRows = rows.map(simplifyMovie);
  console.table(simplifiedMovieRows);
}

function simplifyMovie(fullMovieRow) {
  const { id, moviename, year } = fullMovieRow;
  const simplifiedMovieRow = { id, moviename, year };
  return simplifiedMovieRow;
}

module.exports = {
  promptForSearchTerm,
  makeDBConnectionPool,
  queryDBForMatchingMovies,
  showMovies,
};
