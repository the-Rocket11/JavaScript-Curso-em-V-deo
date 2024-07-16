function gerar () {
    var num = document.querySelector('.number')
    var tab = document.querySelector('.tab')

    tab.innerHTML = ''
    if(num.value == '') {
        alert('Insira um número')
    } else {
        for (var i = 1; i <= 10; i++) {
            var sum = Number(num.value) * i 
            tab.innerHTML += `${num.value} x ${i} = ${sum} \n`
        }
    }
}
