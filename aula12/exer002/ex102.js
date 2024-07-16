function verificar() {
    var date = new Date()
    var year = date.getFullYear()
    var bornYear = document.querySelector('.bornYear')
    var text = document.querySelector('.res')

    if (bornYear.value.length == 0 || bornYear.value > year) {
        alert('Verifique os seus dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('radio')
        var idade = year - Number(bornYear.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('class', 'img')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //bebê
                img.setAttribute('src', 'bebê-m.jpg')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'adolescente-m.jpeg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto-m.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //bebê
                img.setAttribute('src', 'bebê-f.jpeg')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'adolescente-f.jpeg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto-f.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.jpeg')
            }
        }
        text.style.textAlign = 'center'
        text.innerHTML = `${genero} de ${idade} anos de idade`
        text.appendChild(img)
    }
}