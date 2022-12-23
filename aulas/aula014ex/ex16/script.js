function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('retorno')
    var n1 = Number(inicio.value)
    var n2 = Number(fim.value)
    var n3 = Number(passo.value)

    if(inicio.value.lenght == 0 || fim.value.lenght ) {
        alert('ERRO! Para fim 0, o passo deve ser negativo')
    }
    alert(`${n1 + n3}`)

    //inicio = 5 / fim = 15 / passo = 2
}
