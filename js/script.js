const buttons = document.querySelectorAll('.side_button');
const sidebar = document.querySelector('#side');
const shape = document.querySelector('#main-container');

buttons[0].addEventListener('click', function(){
    sidebar.style.left = '0'
    sidebar.style.animationName = 'side1'
})
buttons[1].addEventListener('click', function(){
    sidebar.style.left = '-100%'
    sidebar.style.animationName = 'side2'
})
shape.addEventListener('click', function(){
    sidebar.style.left = '-100%'
    sidebar.style.animationName = 'side2'
})