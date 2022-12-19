//alert('Olá')
var h = new Date();
var hora = h.getHours();
var min = h.getMinutes();
var sec = h.getSeconds();
var r = window.document.getElementById('res');
var cor = window.document.querySelector('body')
r.innerHTML = `Olá!, são ${hora} horas`

//menssagem de 'são ${horas}' boa ${noite}//


if (hora >= 6 && hora <= 12) {
    cor.style.background = '#dbc4a4'
} else if(hora >= 13 && hora <= 17) {
    cor.style.background = '#bd8661'
} else if(hora > 17 && hora <= 23) {
    cor.style.background = '#4b4688'
} else if(hora == 0 && hora < 6) {
    cor.style.background = '#4b4688'
}
