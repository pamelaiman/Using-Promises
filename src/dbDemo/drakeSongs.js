const { makeDBConnectionPool } = require("./dbHelp");

const pool = makeDBConnectionPool("SupaBase1");

// here the promise is the sql query
pool.query("select * from drake_songs").then((resultFromPromise) => {
    displaySongs(resultFromPromise.rows);
});

function displaySongs(allSongs) {
  for (let song of allSongs) {
    console.log(song.name + " made in " + song.year);
  }
}
