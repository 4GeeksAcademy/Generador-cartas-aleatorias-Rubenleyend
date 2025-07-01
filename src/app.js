import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // Cree una funcion para conseguir un elemento al azar de un array
  function randomElement(array) {
    console.log("voy a dar un elemento al azar")
    return array[Math.floor(Math.random() * array.length)]
  }
  // array de simbolos
  const simbolos = ["♦", "♥", "♠", "♣"]
  // array de numeros
  const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

  // Seleciona el elemento que voy a cambiar en HTML
  //const content = document.getElementById("contenedor");
  const symbol = document.querySelectorAll(".symbol")
  const number = document.querySelector(".numero")
  const randomSymbol = randomElement(simbolos)
  const randomNumber = randomElement(numeros)

  // Muestro un elemento al azar dentro del elemento selecionado
  symbol.forEach(element => {
  element.textContent = randomSymbol
  if (randomSymbol == "♦" || randomSymbol == "♥") {
    if(element.className=="symbol lh-1 me-2 rotated"){
      element.className = "symbol lh-1 me-2 rotated text-danger"
    }else {
      element.className = "symbol lh-1 ms-2 text-danger"
    }
    
  }  
});
number.textContent = randomNumber


  


};




