/*Урок 11*/
const eBtn = document.getElementById('e_btn');
eBtn.style = "display: none;"
//------------------------------------------------------------

const btn = document.getElementById('btn');
const text = document.getElementById('text');
const square = document.getElementById('square');
const range = document.getElementById('range');
let span = document.getElementById('range-span');
const circle = document.getElementById('circle');
span.textContent = '50%';
btn.addEventListener('click', function () {
    square.style.background = `${text.value}`;
    text.value = ''
});

const rangeSpan = function (val) {
    span.textContent = val + "%";
    circle.style.height = `${val}%`;
    circle.style.width = `${val}%`;
}
//-------------------------------------------------------------
rangeSpan(50);
range.addEventListener('input', function (e) {
    rangeSpan(e.target.value)
});
