let params = new URLSearchParams(window.location.search);

const widthParam = Number(params.get("width"));
const heightParam = Number(params.get("height"));
const roundParam = Number(params.get("round"));

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

function paramChangeSize(){
    width = widthParam;
    height = heightParam;
    roundValue = roundParam;
    divModifier = document.getElementById('div-test');

    if (!isNaN(width) && width != ''){
        divModifier.style.width = ` ${width}px`;
        valuesInserted[1] = true;
        lastInserted[1] = width;
    } else {
        alert('Parametro Incorrecto (Width)');

    }
    if (!isNaN(height) && height != ''){
        divModifier.style.height = `${height}px`;
        valuesInserted[0] = true;
        lastInserted[0] = height;
    } else {
        alert('Parametro Incorrecto (Height)');
    }
    if (!isNaN(roundValue) && roundValue != ''){
        divModifier.style.borderRadius = `${roundValue}px`;
        valuesInserted[2] = true
        lastInserted[2] = roundValue;
    } else {
        alert('Parametro Incorrecto (Borde Redondeado)');
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

if (widthParam != null & widthParam != ""){
    width.value = widthParam
}

if (heightParam != null & heightParam != ""){
    height.value = heightParam
}

if (roundParam != null & roundParam != ""){
    roundValue.value = roundParam
}

if (widthParam != null & widthParam != "" & heightParam != null & heightParam != "" & roundParam != null & roundParam != ""){
    if (widthParam != NaN & heightParam != NaN & roundParam != NaN){
       paramChangeSize();
       last.textContent = `Ultimo Ingresado:${width}x${height}px e Intensidad de borde ${roundValue}px`;
    }
}