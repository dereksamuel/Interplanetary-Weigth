let d = document.getElementById('paisaje');
let text = document.getElementById('text');
let dimentions = d.getContext('2d');
const watch = document.getElementById('watch');
let ancho = d.width;

function linedraw (color, xinput,yinput, xoutput, youtput) {
    dimentions.beginPath();
    dimentions.strokeStyle = color;
    dimentions.moveTo(xinput,yinput);
    dimentions.lineTo(xoutput,youtput);
    dimentions.stroke();
    dimentions.closePath();
};

function circledraw(color, background, xd, yd, tamano ) {
    dimentions.beginPath();
    dimentions.strokeStyle = color;
    dimentions.fillStyle = background;
    dimentions.arc(xd,yd,tamano,0,(Math.PI/180)*360,true);
    dimentions.stroke();
    dimentions.lineWidth = 10;
    dimentions.fill();
    dimentions.closePath();
}

watch.addEventListener('click', add = () => {
let x = parseInt(text.value);
let lines = x;
let cont = 0;
let contador = 0;
let yi, xf;
let yf, xi;
let red = '#da9771';
let space = ancho / lines;

while(cont < lines) {
    yi = space * cont;
    xf = space * (1 + cont);
    linedraw(red, 0, yi , xf, 500);
    console.log(cont);
    cont += 1;
};

while(contador < lines) {
    yf = space * contador;
    xi = space * ( 1 + contador);
    linedraw(red, xi, 2 , 499, yf);
    console.log(contador);
    contador += 1;
}
} );

circledraw('#a7a5a5', "#e4e2e2", 180, 180 , 30);
circledraw('#c5c5c5','#a7a5a5', 180, 170 , 8);
circledraw('#c5c5c5','#a7a5a5', 170, 192 , 9);
circledraw('#c5c5c5','#a7a5a5', 190, 190 , 5);