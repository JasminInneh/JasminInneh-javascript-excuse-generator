/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let randomNumber = Math.random() * 10;
  document.querySelector("#newExcuseBTN").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let noun = ["alien", "baby", "shark", "alligator", "driver"];
  let verb = ["took my", "ate my", "tore my", "stole my", "squashed my"];
  let setting = [
    "on earth",
    "at my house",
    "at the beach",
    "outside on my jog",
    "on the street"
  ];
  let possession = ["contract", "mail", "phone", "foot", "leg"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let verbIndex = Math.floor(Math.random() * verb.length);
  let settingIndex = Math.floor(Math.random() * setting.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  return (
    pronoun[pronounIndex] +
    " " +
    noun[nounIndex] +
    " " +
    verb[verbIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    setting[settingIndex]
  );
};
