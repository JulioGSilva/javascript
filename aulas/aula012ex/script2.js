function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('ano').value
    var res = window.document.getElementById('res')
    if (fano == 0 || fano > ano) {
        window.alert('[ERRO] INFORME UM ANO VALIDO')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        if (fsex[0].checked) {
            var genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${ano - fano} anos.`
    }
     
}