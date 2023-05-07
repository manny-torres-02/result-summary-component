import "/styles.css";
import "./summary.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<div class = "top">
<p class = "lavender-text">Your Result</p>
<div class = "circle">
  <h1>76</h1>
  <h6>of 100</h6>
</div>
  <h2>Great</h2>
  <p class = "lavender-text">You scored higher than 65% of the people who have taken these tests. </p>
</div>

  <div class="summary ">
  <p>Summary</p>
    <div class ="summary-components red">
    <img  class="icon" src="../assets/images/icon-reaction.svg"/>
  <p>Reaction </p>
  <p class="summary-score">80 / 100</p>
</div>

<div class ="summary-components yellow">
<img  class icon src="../assets/images/icon-memory.svg""/>
  <p>Memory</p>
  <p class="summary-score">92 / 100</p>
</div>

<div class ="summary-components green">
<img  class icon src="../assets/images/icon-verbal.svg""/>
  <p>Verbal</p>
  <p class="summary-score"> 61 / 100</p>
</div>

<div class ="summary-components blue"> 
<img  class icon src="../assets/images/icon-visual.svg""/>
  <p>Visual</p>
  <p class="summary-score">72 / 100</p>
</div>

<div class="summary-components">
  Continue
</div>
</div>
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
`;

setupCounter(document.querySelector("#counter"));
