const { prompt } = require("enquirer");

prompt({
  type: "input",
  message:
    "Welcome to FizzBuzz. In numbers, how long do you want your list to be?",
  name: "number",
}).then((response) => {
  console.log("You said: ", response.number);
  console.log(generateFizzBuzz(response.number));
});

const generateFizzBuzz = (n) => {
  const returnArray = [];
  for (let i = 1; i <= n; i++) {
    const result = calculateFizzBuzzWordFor(i);
    returnArray.push(result);
  }
  return returnArray;
};

const calculateFizzBuzzWordFor = (i) => {
  if (i % 15 === 0) {
    return "FizzBuzz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else {
    return i;
  }
};
