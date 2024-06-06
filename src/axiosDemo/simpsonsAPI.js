const axios = require("axios").default;

const url = "https://api.tvmaze.com/shows/83/episodes";

// go to the website
const resultingPromise = axios.get(url);

// logging to the user what website it being used (simpsons)
console.log("This program has asked axios to get the url: " + url)

/** promise is made in line 6 and is pending. within a few secs, it's done
 * line 14 then says, then the promise is complete, handle it i.e. show the user
 * using the function which uses console.log */
resultingPromise.then(handleCompletedPromise);

function handleCompletedPromise(resultFromPromise) {
    let episodes = [];
    console.log("The promise is complete. Status:", resultFromPromise.status)
    console.log("Here are the episode names of `The Simpsons`:")
    resultFromPromise.data.forEach(episode => {
        episodes.push(episode)
        console.log(episode.name)}
    ) 
    console.log("There are", episodes.length, "episodes.")
    ;
}
