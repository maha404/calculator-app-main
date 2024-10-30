"use strict";

// Räkne knappar
let plusBtn = document.getElementById('plusbtn');
let resultBtn = document.getElementById('resultbtn');

// DEL och RESET
let reset = document.getElementById('resetbtn');
let del = document.getElementById('delbtn');

// Display
let display = document.getElementById('num-input');

// Alla nummer knappar
let btns = document.getElementsByClassName('btn');

for(let i = 0; i < btns.length; i++) {
//    console.log(btns[i].innerText);
   btns[i].addEventListener('click', () => {
    // Få varje knapps värde + lägga på en händelsehanterare
    // console.log(btns[i].innerText);
    inputField(btns[i].innerText);
   })
}

function inputField(num) {
    display.value += num;
}

reset.addEventListener('click', () => {
    display.value = '';
})

del.addEventListener('click', () => {
    display.value = ''
})

function calculate() {
    display.value = eval(display.value);
}

resultBtn.addEventListener('click', calculate);






