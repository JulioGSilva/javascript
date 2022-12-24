let res = document.getElementById('res')
let lista = []

function adicionar() {
    let num = document.getElementById('num').value
    let n = parseInt(num)
    let tab = document.getElementById('sele')
    let item = document.createElement('option')
    item.setAttribute('id', 'opt')
    item.innerText = `Valor ${num} adicionado`
    tab.appendChild(item)
    lista.push(n)
    
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
    res.innerHTML += `Ao todo, temos ${lista.length} números cadastrados <br><br>
    O maior valor informado foi ${max} <br><br>
    O menor valor informado foi ${min} <br><br>
    A soma dos valores é ${soma} <br><br>
    A media dos valores digitados é ${media}`


    /*res.innerHTML += `O menor valor informado foi ${}`
    res.innerHTML += `Somando todos os valores, temos ${}`
    res.innerHTML += `A média dos valores digitados é ${}`*/
}