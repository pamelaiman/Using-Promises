const axios = require("axios").default;

const url = "https://api.openweathermap.org/data/2.5/weather?lat=50&lon=100&appid=21b50dfa73c2bb5ce45a6575a2df9bc3";

const resultingPromise = axios.get(url);
console.log("This program has asked axios to get the url: " + url)

resultingPromise.then(handleCompletedPromise);
function handleCompletedPromise(resultFromPromise) {
    console.log("The promise is complete. Status:", resultFromPromise.status)
    console.log("Here are the weather details:")
    console.log(resultFromPromise.data)
    ;
}
