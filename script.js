

setInterval(() => {
    var online = document.getElementById('online');
    var facil = document.getElementById('facil');
    var seguro = document.getElementById('seguro');

    if(online.style.display === "") {
        document.getElementById('online').style.display = 'none'; 
        facil.style.display = '';

    } else if(facil.style.display === "") {
        document.getElementById('facil').style.display = 'none';
        document.getElementById('online').style.display = 'none';
        seguro.style.display = '';
    } else if (seguro.style.display === "") {
        document.getElementById('seguro').style.display = 'none';
        document.getElementById('facil').style.display = 'none';
        online.style.display = '';
    }
}, 2000);

setInterval(() => {
    var texto = document.getElementById('texto');
    texto.classList.toggle('rotated');

}, 2000);

setInterval(() => {
    var texto = document.getElementById('texto');
    texto.classList.toggle('rotated2');

}, 1000);
