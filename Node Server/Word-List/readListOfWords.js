const fs = require("fs");

fs.readFile("./listOfWords.txt", (err, f) => {
  // Create JSON from array
  const words = f.toString().split("\n");
  let updated = [];
  for (let i = 0; i < words.length; i++) {
    let idNum = i + 1;
    let id = idNum.toString();
    let entry = words[i];
    updated.push({ id, entry });
  }
  const wordsJSON = JSON.stringify(updated);

  // Create new JSON file
  fs.writeFile("./listOfWords.json", wordsJSON, (err) => {
    if (!err) {
      console.log("done");
    }
  });
});
