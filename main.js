"use strict";

// Räkne knappar
let plusBtn = document.getElementById('plusbtn');
let minusBtn = document.getElementById('subbtn');
let divideBtn = document.getElementById('dividbtn');
let multiplyBtn = document.getElementById('multibtn');

// Resultat knapp
let resultBtn = document.getElementById('resultbtn');

// DEL och RESET
let reset = document.getElementById('resetbtn');
let del = document.getElementById('delbtn');

// Display
let display = document.getElementById('num-input');

// Alla nummer knappar
let btns = document.getElementsByClassName('btn');

let message = document.getElementById('secret-message');

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
    message.innerText = '';
})

del.addEventListener('click', () => {
    display.value = ''
    message.innerText = '';
})

function calculate() {

    display.value = eval(display.value);

    if(display.value === '1337') {
        message.innerText = 'ELIIIITE!!';
    }

    if(display.value === '42') {
        message.innerText = 'The answer to life, the universe, and everything...';
    }

    if(display.value === '21') {
        message.innerText = 'TWENTY-ONE!!';
    }

    if(display.value === '9001') {
        message.innerText = "IT'S OVER 9000!!";
    }
    
}

const toggleSwitch = document.querySelector('.toggle-switch');
const toggleIndicator = document.querySelector('.toggle-indicator');
const toggleOptions = document.querySelectorAll('.toggle-option');

// Lägg till klickhändelse för varje alternativ
toggleOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
        // Beräkna positionen för indikatorn
        toggleIndicator.style.left = `${5 + index * 32}px`; // justera för rätt position

        // Uppdatera temat (valfritt)
        const theme = option.getAttribute('data-theme');
        document.body.setAttribute('data-theme', theme); // ex. för att ändra tema
    });
});

resultBtn.addEventListener('click', calculate);




