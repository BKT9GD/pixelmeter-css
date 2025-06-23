/** @type {HTMLParagraphElement} */
let last = document.getElementById('last');

/** @type {HTMLElement} */
let divModifier = document.getElementById('div-test');

/** @type {HTMLInputElement} */
let width = document.getElementById('div-width');

/** @type {HTMLInputElement} */
let height = document.getElementById('div-height');

/** @type {HTMLInputElement} */
let roundValue = document.getElementById('round-border');

/** @type {HTMLButtonElement} */
const adjustButton = document.getElementById('adjustButton');
/** @type {HTMLButtonElement} */
const cleanButton = document.getElementById('cleanButton');
/** @type {HTMLButtonElement} */
const lastButton = document.getElementById('setLast');

let valuesInserted = [false, false, false];

let used;
let lastInserted = [undefined, undefined, undefined];

function changeSize(){
    width = document.getElementById('div-width');
    height = document.getElementById('div-height');
    roundValue = document.getElementById('round-border');
    divModifier = document.getElementById('div-test');

    if (!isNaN(width.value) && width.value != ''){
        divModifier.style.width = ` ${width.value}px`;
        valuesInserted[1] = true;
        lastInserted[1] = width.value;
    } else {
        alert('Porfavor inserta un numero (width)');

    }
    if (!isNaN(height.value) && height.value != ''){
        divModifier.style.height = `${height.value}px`;
        valuesInserted[0] = true;
        lastInserted[0] = height.value;
    } else {
        alert('Porfavor inserta un numero (height)');
    }
    if (!isNaN(roundValue.value) && roundValue.value != ''){
        divModifier.style.borderRadius = `${roundValue.value}px`;
        valuesInserted[2] = true
        lastInserted[2] = roundValue.value;
    } else {
        alert('Porfavor inserta un numero (Borde Redondeado)');
    }
}

function changeValues(value){
    width.value = value;
    height.value = value;
    roundValue.value = value;
}

function setLastValue(){
    if (lastInserted[0] != undefined && lastInserted[1] != undefined && lastInserted[2] != undefined){
        height.value = lastInserted[0];
        width.value = lastInserted[1];
        roundValue.value = lastInserted[2];
    } else {
        alert("Error, los valores no estan completos o no hay valores almacenados")
    }
}

adjustButton.addEventListener('click', () => {
    changeSize();
    if (valuesInserted[0] === true && valuesInserted[1] === true && valuesInserted[2] === true){
        last.textContent = `Ultimo Ingresado:${width.value}x${height.value}px e Intensidad de borde ${roundValue.value}px`;
        valuesInserted[0, 1, 2] = false;
    }
    changeValues('');
})

cleanButton.addEventListener('click', () => {
    changeValues('');
})

lastButton.addEventListener('click', () => {
    setLastValue()
})