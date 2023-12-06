import React, { useState } from "react";
import "./Style.css";
const BMIcalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState("");

  const calculate = () => {
    let bmi = weight / (height / 100) ** 2;
    setBmi(bmi);
    if (bmi < 18.5) {
      setCategory("Underweight");
    } else if (18.5 <= bmi && bmi <= 24.9) {
      setCategory("Normal Weight");
    } else if (25 <= bmi && bmi <= 29.9) {
      setCategory("Overweight");
    } else if (bmi >= 30) {
      setCategory("Obesity");
    }
  };

  return (
    <>
    <main>
      <h1>BMI CALCULATOR</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="bmi">Weight in Kg : </label>
        <input
          type="number"
          id="bmi"
          
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <br />
        <label htmlFor="height">Height in Cms : </label>
        <input
          type="number"
          id="height"
          
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <br />
        <button type="button" onClick={() => calculate()}>
          Calculate BMI
        </button>
        <h3>Your BMI : <span>{bmi.toFixed(2)}</span></h3>
        <h1 className="cate">{category}</h1>
      </form>
      </main>
    </>
  );
};
export default BMIcalculator;