/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generadordeexcusa();
  });
  console.log("Hello Rigo from the console!");
};

let generadordeexcusa = () => {
  var aleatorio = Math.random();
  var who = ["mi abuela", "el perro", "mi pajaro", "un loco"];
  var verb = ["se comio", "se robo", "rompio", "escondió"];
  var what = ["mi tarea!!!", "mi ropa!!!", "mi zapato!!!", "las llaves!!!"];
  var when = [
    "mientras rezaba",
    "antes de la clase",
    "en la calle",
    "cuando almorzaba"
  ];

  var whoindex = Math.floor(Math.random() * who.length);
  var verbindex = Math.floor(Math.random() * verb.length);
  var whatindex = Math.floor(Math.random() * what.length);
  var whenindex = Math.floor(Math.random() * when.length);

  return (
    who[whoindex] +
    " " +
    verb[verbindex] +
    " " +
    what[whatindex] +
    " " +
    when[whenindex]
  );
};
