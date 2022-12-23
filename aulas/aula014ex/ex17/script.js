function tabuada() {
    let num = document.getElementById('num')
    let n1 = Number(num.value)
    let res = document.getElementById('res')
    let c = 1
    while(c <= 10) {
        let r = n1 * c
        res.innerHTML += `${r} - `
        c += 1
    }
}