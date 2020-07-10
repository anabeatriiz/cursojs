function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = ` Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bomdia
       img.src = '/ex014/manha.jpg'
       document.body.style.background = '#FFE379'
    } else if (hora >= 12 && hora <= 18) {
        //boatarde
        img.src = '/ex014/tarde.jpg'
        document.body.style.background = '#f37c52'
    } else {
        //boa nooite
        img.src = '/ex014/noite.jpg'
        document.body.style.background = '#2B282F'
    }
}
