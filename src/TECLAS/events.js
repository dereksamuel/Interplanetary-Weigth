document.addEventListener('keydown', dibujarTeclado);
let d = document.getElementById('area_de_dibujo');
let boceto = d.getContext('2d');
let x = 250;
let y = 250;

let teclas = {
 UP: 'ArrowUp',
 DOWN: 'ArrowDown',
 LEFT: 'ArrowLeft',
 RIGHT: 'ArrowRight',
 W: 'KeyW',
 A: 'KeyA',
 D: 'KeyD',
 S: 'KeyS'
};

function dibujarTeclado(event) {
    console.log(event)
    let movment = 5;
    switch(event.code) {
        case teclas.UP:
            linedraw(inputcolor.value, x, y, x, y-movment, boceto, 2);
            y -= movment; 
        break;
        case teclas.DOWN:
            linedraw(inputcolor.value, x, y+movment, x, y, boceto, 2);
            y += movment; 
        break;
        case teclas.LEFT:
            linedraw(inputcolor.value, x, y, x-movment, y, boceto, 2);
            x -= movment; 
        break;
        case teclas.RIGHT:
            linedraw(inputcolor.value, x+movment, y, x, y, boceto, 2);
            x += movment; 
        break;
        case teclas.W:
            linedraw('', 0, y-movment, 0, 0, boceto, 2);
            y -= movment;
        break;
        case teclas.S:
            linedraw('', 0, 0, 0, y+movment, boceto, 2);
            y += movment;
        break;
        case teclas.A:
            linedraw('', 0, 0, x-movment, 0, boceto, 2);
            x -= movment;
        break;
        case teclas.D:
            linedraw('', 0, x+movment, 0, 0, boceto, 2);
            x += movment;
        break;
        default:
            console.log('This is other parameter');
        break;
    }
}

linedraw('#fff', 249, 249, 251, 251, boceto, 3);

function linedraw (color, xinput,yinput, xoutput, youtput, dimentions, bold) {
    dimentions.beginPath();
    dimentions.strokeStyle = color;
    dimentions.moveTo(xinput,yinput);
    dimentions.lineTo(xoutput,youtput);
    dimentions.lineWidth = bold;
    dimentions.stroke();
    dimentions.closePath();
}

function circledraw(color, background, xd, yd, dimentions, tamano ) {
    dimentions.beginPath();
    dimentions.strokeStyle = color;
    dimentions.fillStyle = background;
    dimentions.arc(xd,yd,tamano,0,(Math.PI/180)*360,true);
    dimentions.stroke();
    dimentions.lineWidth = 10;
    dimentions.fill();
    dimentions.closePath();
}

let canvas = document.getElementById('area_de_dibujo');
let eliminar = document.getElementById('eliminar');
let colorinputTwo = document.getElementById('colorinputTwo');
let circles = document.getElementById('circle');
let blues = document.getElementById('blue');
let reds = document.getElementById('red');
let greens = document.getElementById('green');
let yellows = document.getElementById('yellow');
let oranges = document.getElementById('orange');
let blacks = document.getElementById('black');
let inputcolor = document.getElementById('inputcolor');
let fondo = document.getElementById('fondo');
let borrar = document.getElementById('borrar');
const sesenta = document.getElementById('sesenta');
const cincuenta = document.getElementById('cincuenta');
const cuarenta = document.getElementById('cuarenta');
const treinta = document.getElementById('treinta');
const veinte = document.getElementById('veinte');
const diez = document.getElementById('diez');
const uno = document.getElementById('uno');
const inputTamano = document.getElementById('tamaño');
canvas.addEventListener('mousedown', cursorMouse);
canvas.addEventListener('mousemove', cursorMouse);
canvas.addEventListener('mouseup', cursorMouse);
borrar.addEventListener('click', borrars);
function borrars() {
    canvas.removeEventListener('mousedown', cursorMouse);
    canvas.removeEventListener('mousemove', cursorMouse);
    canvas.removeEventListener('mouseup', cursorMouse);
    canvas.removeEventListener('mousedown', cursorMouseS);
    canvas.removeEventListener('mousemove', cursorMouseS);
    canvas.removeEventListener('mouseup', cursorMouseS);
    canvas.addEventListener('mousedown', borrare);
    canvas.addEventListener('mousemove', borrare);
    canvas.addEventListener('mouseup', borrare);
}
circles.addEventListener('click', circle);
function circle() {
    canvas.removeEventListener('mousedown', borrare);
    canvas.removeEventListener('mousemove', borrare);
    canvas.removeEventListener('mouseup', borrare);
    canvas.removeEventListener('mousedown', cursorMouse);
    canvas.removeEventListener('mousemove', cursorMouse);
    canvas.removeEventListener('mouseup', cursorMouse);
    canvas.addEventListener('mousedown', cursorMouseS);
    canvas.addEventListener('mousemove', cursorMouseS);
    canvas.addEventListener('mouseup', cursorMouseS);
}
blues.onclick = function() {
    inputcolor.value = 'blue';
}

reds.onclick = function() {
    inputcolor.value = 'red';
}

greens.onclick = function() {
    inputcolor.value = 'green';
}

yellows.onclick = function() {
    inputcolor.value = 'yellow';
}

oranges.onclick = function() {
    inputcolor.value = 'orange';
}

blacks.onclick = function() {
    inputcolor.value = 'black';
}

fondo.onclick = function () {
    canvas.style = `background-color:${colorinputTwo.value}; border: 1em rgb(92, 106, 107) solid;  margin-left: 30vw;`;
}

sesenta.onclick = function () {
    inputTamano.value = '60';
}

cincuenta.onclick = function () {
    inputTamano.value = '50';
}

cuarenta.onclick = function () {
    inputTamano.value = '40';
}

treinta.onclick = function () {
    inputTamano.value = '30';
}

veinte.onclick = function () {
    inputTamano.value = '20';
}

diez.onclick = function () {
    inputTamano.value = '10';
}

uno.onclick = function () {
    inputTamano.value = '1';
}
var movement = 0

function cursorMouse(event) {
    if(event.type == 'mousedown') {
        xs = event.layerX;
        ys = event.layerY;
        movement = 1;
    } 
    if(event.type == 'mouseup'){
        movement = 2;
    }
    if(event.type == 'mousemove' && movement == 1) {
        let x = event.layerX;
        let y = event.layerY;
        linedraw(inputcolor.value, x, y, xs, ys, boceto, inputTamano.value);
        xs = x;
        ys = y;
        if(movement == 2){
            movement = 0
        }
    }
}

let move = 0;

function cursorMouseS(event) {
    if(event.type == 'mousedown') {
        xs = event.layerX;
        ys = event.layerY;
        move = 1;
    } 
    if(event.type == 'mouseup'){
        move = 2;
    }
    if(event.type == 'mousemove' && move == 1) {
        let x = event.layerX;
        let y = event.layerX;
        circledraw(inputcolor.value,inputcolor.value, xs, ys, boceto, inputTamano.value);
        if(move == 2){
            move = 0
        }
    }
}

function borrare() {
    if(event.type == 'mousedown') {
        xs = event.layerX;
        ys = event.layerY;
        movement = 1;
    } 
    if(event.type == 'mouseup'){
        movement = 2;
    }
    if(event.type == 'mousemove' && movement == 1) {
        let x = event.layerX;
        let y = event.layerY;
        linedraw(inputcolor.value, x, y, xs, ys, boceto,inputTamano.value);
        xs = x;
        ys = y;
        if(movement == 2){
            movement = 0
        }
    }
}