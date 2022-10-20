import React from "react";
import WordToList from "../WordToList/WordsToList";
import { useState } from "react";
import { createWorker } from "tesseract.js";

export default function ReadTextUsingTesseract() {
  const [imagePath, setImagePath] = useState("");
  const [text, setText] = useState("");

  const worker = createWorker({
    logger: (m) => {
      console.log(m);
    },
  });

  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  };

  const handleClick = async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(imagePath);
    setText(text);
  };

  return (
    <div>
      <h3>Actual image uploaded</h3>
      <img src={imagePath} />

      <div>
        <h3>Extracted text</h3>
        <p>{text}</p>
      </div>

      <input type="file" onChange={handleChange} />
      <button onClick={handleClick}>Convert to text</button>
      <WordToList words={text.split(" ")}></WordToList>
    </div>
  );
}
