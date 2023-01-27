function calcular() {
    let nu1 = window.document.getElementById('num1').value
    let nu2 = window.document.getElementById('num2').value
    let simb = window.document.getElementById('select').value
    let num1 = Number(nu1)
    let num2 = Number(nu2)
    
    if (simb == '+') {
        let res = num1 + num2
        return res
    }
    alert(`${res}`)
}