const post = document.querySelector('button');
let ager = document.getElementById('ager');
let year = document.getElementById('year');

post.addEventListener('click', edad = () =>{
    age = year.value - ager.value;
    document.write(`<style> body { font-family: monospace;}</style>Tu edad es: ${age} años`);
});

