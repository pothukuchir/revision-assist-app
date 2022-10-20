import React from "react";
import { useState, useEffect, useRef } from "react";
import LeaderLine from "react-leader-line";

import "./WordToList.css";

export default function WordsToList(props) {
  const [stopWords, setStopWords] = useState([]);
  const myRef = useRef([]);

  useEffect(() => {
    getWords();
  }, []);

  useEffect(() => {
    console.log(myRef.current);
    if (myRef.current) {
      for (let i = 8; i < myRef.current.length - 3; i++) {
        let el1 = myRef.current[i];
        if (myRef.current[i + 1]) {
          let el2 = myRef.current[i + 1];
          new LeaderLine(el1, el2);
        }
      }
    }
  });

  function getWords() {
    fetch("http://localhost:3002")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        let myStopWords = [];
        let newData = JSON.parse(data);
        newData.forEach(function (item) {
          myStopWords.push(item["entry"]);
        });
        setStopWords(myStopWords);
      });
  }

  let inputWords = props.words;

  let output = inputWords.filter(function (word) {
    return stopWords.indexOf(word) < 0;
  });

  let shapes = [];
  for (let i = 1; i <= output.length; i++) {
    shapes.push(
      <div
        className="topic"
        id={"topicId-" + i}
        ref={(el) => myRef.current.push(el)}
      >
        {output[i - 1]}
      </div>
    );
  }

  return <div className="wrapper">{shapes}</div>;
}
