function verificar() {
    var data = new Date()
    var ano =data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //similar to typing id in HTML
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'baby-mf.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'young-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adult-m.png')
            } else {
                img.setAttribute('src', 'elderly-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'baby-mf.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'young-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adult-f.png')
            } else {
                img.setAttribute('src', 'elderly-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}
