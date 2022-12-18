//alert('Olá')//

    var data = new Date()
    var hora = data.getHours()
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('res')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        //DIA
        img.src = 'Imagens/manhã.jpg'
        window.document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //tarde
        img.src = 'Imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //noite
        img.src = 'Imagens/noite.jpg'
        document.body.style.background = '#515154'
    }