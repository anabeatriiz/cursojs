function verificar() {
   let date = new Date()
   let ano = date.getFullYear()
   let fano = window.document.getElementById('txtano')
   let res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano) {
       window.alert('[ERRO] Verifique os dados e tente novamente')
   } else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 11) {
            //criança
            img.setAttribute('src', 'crianca-menino.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovem-homem.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'homem-adulto.png')
        } else {
            //idoso
            img.setAttribute('src', 'idoso.png')
        }
    } else if (fsex[1].checked) {
        genero =   'Mulher' 
        if (idade >= 0 && idade < 11) {
            //criança
            img.setAttribute('src', 'crianca-menina.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovem-mulher.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'mulher-adulta.png')
        } else {
            //idoso
            img.setAttribute('src', 'idosa.png')
        }
    }
    res.innerHTML = `Calculamos ${genero} com ${idade} anos`
    res.appendChild(img)
}  

}

