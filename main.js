console.log("alart was wrong");

let open0 = document.getElementById('open');
let close0 = document.getElementById('close');
let list = document.getElementById('links');

open0.addEventListener('click', () => {
    open0.style.display = 'none'
    close0.style.display = 'block';
    list.style.top = '10vh';
    list.style.left = '0';
})
close0.addEventListener('click', () => {
    close0.style.display = 'none'
    open0.style.display = 'block';
    list.style.top = '10vh';
    list.style.left = '-100vw';
})