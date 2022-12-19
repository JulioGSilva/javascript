function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('ano').value
    var res = window.document.getElementById('res')
    var idade = ano - fano
    var img = document.querySelector('img')

    if (idade <= 3) {
        img.src = 'imagens2/criança0-3.jpg'
    }

    if (fano == 0 || fano > ano) {
        window.alert('[ERRO] INFORME UM ANO VALIDO')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        if (fsex[0].checked) {
            var genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
     
}