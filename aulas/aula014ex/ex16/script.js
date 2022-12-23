function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('retorno')
    var n1 = Number(inicio.value)
    var n2 = Number(fim.value)
    var n3 = Number(passo.value)

    if(inicio.value.length == 0 || fim.value.length ==0 || passo.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
    }
    for(let c = n1; c<= n2; c+= n3) {
        res.innerHTML += ` ${c} > `
    }
}
