let more_html = document.getElementById('html');
let mostrar_html = document.getElementById('more-html');

more_html.addEventListener('mouseenter', function(){

    if(mostrar_html.style.display == 'none') {
        mostrar_html.style.display = 'flex';
    } else {
        mostrar_html.style.display = 'none';
    }
})