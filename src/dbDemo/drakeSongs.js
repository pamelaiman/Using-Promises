const { makeDBConnectionPool } = require("./dbHelp");

const pool = makeDBConnectionPool("async-demo");

pool.query("select * from drake_songs").then((results) => {
    displaySongs(results.rows);
});

function displaySongs(allSongs) {
  for (let song of allSongs) {
    console.log(song.name + " made in " + song.year);
  }
}
