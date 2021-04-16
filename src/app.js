/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuse();
  });
  console.log("Hello Rigor from  the console! ");
};
function excuse() {
  let who = ["Mi perro", "Mi abuela", "Mi novia", "Mi gato"];
  let subject = ["las llaves", "la moto", "el auto"];
  let action = ["choco", "rallo", "rompio", "ensucio"];
  let what = ["mi casa", "mis llaves", "mi auto", "mi ejercicio de excusa"];
  let when = [
    "despues de clases",
    "en el trabajo",
    "mientras dormia",
    "mientras comia",
    "cuando estaba en el bar"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
}
