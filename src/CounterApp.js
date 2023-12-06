import React, { useState } from "react";
import "./Style.css";
const CounterApp = () => {
    const [words,setWords] = useState("");
    const [count,setCount] = useState(0);
    const [letters,setLetters] = useState(0);
    const countWords = () => {
        let a = words.split(" ");
        let b = a.filter((ele) => ele.trim());
        let c = b.length;
        let d = words.split("");
        let e = d.filter((ele) => ('a' <= ele.toLowerCase() && ele.toLowerCase() <= 'z') ? ele : null);
        let f = e.length;
        setLetters(f);
        setCount(c);
    }
    return (
        <>
        <h1>WORDS & LETTERS COUNTER</h1>
        <textarea 
        rows="18" 
        cols="75"
        placeholder="Enter/Paste your text"
        value={words}
        onChange={(e) => setWords(e.target.value)}  
        style={{resize: "none"}}      
        ></textarea> <br />
        <button type="button" onClick={() => countWords()}>Count</button>
        <h2>Total Number of Words = <span>{count}</span></h2>
        <h2>Total Number of Letters = <span>{letters}</span></h2>
        
        </>
    );
}
export default CounterApp;