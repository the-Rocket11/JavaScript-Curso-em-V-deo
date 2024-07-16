function contar() {
    var inicio = document.querySelector('.inicio').value
    var fim = document.querySelector('.fim').value
    var passos = document.querySelector('.passos').value
    var texto = document.querySelector('.res')
    
    if(inicio == '' || fim == '') {
        texto.innerHTML = 'Impossível contar'
    } else if(passos == '') {
        alert('PASSO INVÁLIDO!! Considerando Passo 1')
        passos = Number(passos) + 1
        texto.innerHTML = ''
        var c = 0 + Number(inicio)
        if (Number(fim) <= c) {
            while (Number(fim) <= c) {
                texto.innerHTML += `&#128073 ${c} `
                c -= Number(passos)
            }
            texto.innerHTML += ` &#127937`
        } else {
            while (c <= Number(fim)) {
                texto.innerHTML += `&#128073 ${c} `
                c += Number(passos)
            }
            texto.innerHTML += ` &#127937`
        }
    }
    
}