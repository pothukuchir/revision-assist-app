const Pool = require("pg").Pool;
const pool = new Pool({
  user: "my_user",
  host: "localhost",
  database: "postgres",
  password: "root",
  port: 5432,
});

const getWords = () => {
  console.log("Requesting words");

  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM words", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

// Create single word
const createWord = (body) => {
  return new Promise(function (resolve, reject) {
    const { id, entry } = body;
    console.log(body);
    pool.query(
      "INSERT INTO words (id, entry) VALUES ($1, $2) RETURNING *",
      [id, entry],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new entry has been added`);
      }
    );
  });
};

// Create multiple words
const createMultipleWords = (body) => {
  return new Promise(function (resolve, reject) {
    for (var i = 0; i < body.length; i++) {
      pool.query(
        "INSERT into words (id, entry) VALUES ($1, $2) RETURNING *",
        [body[i].id, body[i].entry],
        (error, results) => {
          if (error) {
            reject(error);
          }
          resolve(console.log("New entry added"));
        }
      );
    }
  });
};

module.exports = {
  getWords,
  createWord,
  createMultipleWords,
};
