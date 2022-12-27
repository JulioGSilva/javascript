let num = document.getElementById('num').value
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if ( Array.includes(n)) {
        return true
    } else {
        return false
    }
   /*if (Number(n) >= 1 && Number(n) <= 100) {
        return true
   } else {
        return false
   }*/
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(!isNaN(num) && !inlista(num.value, valores)) {
        alert('ok')
    } else {
        window.alert('Valor invalido')
    }
    
}



function finalizar() {
    let max = Math.max.apply(null, lista)
    let min = Math.min.apply(null, lista)
    let soma = 0
    for(let c = 0; c < lista.length; c++){
        soma += lista[c]
    }
    let t = lista.length
    let media = soma / t
    res.innerHTML = `Ao todo, temos ${lista.length} números cadastrados <br><br>
    O maior valor informado foi ${max} <br><br>
    O menor valor informado foi ${min} <br><br>
    A soma dos valores é ${soma} <br><br>
    A media dos valores digitados é ${media}`


    /*res.innerHTML += `O menor valor informado foi ${}`
    res.innerHTML += `Somando todos os valores, temos ${}`
    res.innerHTML += `A média dos valores digitados é ${}`*/
}