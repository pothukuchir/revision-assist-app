const fs = require("fs");
const words_model = require("../words_model");

fs.readFile("./listOfWords.json", (err, f) => {
  const words = JSON.parse(f);
  words_model
    .createMultipleWords(words)
    .then(console.log("success"))
    .catch(console.log("fail"));
});
