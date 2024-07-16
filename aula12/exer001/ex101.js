function carregar() {
    var text = document.querySelector('.text')
var img = document.querySelector('.img')
var date = new Date()
var hour = date.getHours()

text.innerHTML = `São <strong>${hour}</strong> horas`
if(hour < 12) {
    img.src = '/aula12/exer001/img/manhã.png'
} else if (hour < 18) {
    img.src = '/aula12/exer001/img/tarde.jpg'
} else {
    img.src = '/aula12/exer001/img/noite.png'
}
}