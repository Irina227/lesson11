/*Урок 11*/
const btn = document.getElementById("btn");
const text = document.getElementById("text");

const button = document.querySelector('#e_btn')
const circle = document.querySelector('#circle')
const squere = document.querySelector('#square')


const range = document.getElementById("range");
const span = document.getElementById("range-span");

const logger = function (event) {
  console.log(event.type);
  span.textContent = event.target.value
}
range.addEventListener('input', logger);
range.addEventListener('change', logger);


button.onclick = function () {
  alert("Клик по кнопке!");
};


const toggler = function (event) {
  console.log(event.target);
  event.target.classList.toggle('green')
}

button.addEventListener('click', toggler);
circle.addEventListener('click', toggler);
square.addEventListener('click', toggler);


// btn.addEventListener('click', function () {
  
// })
