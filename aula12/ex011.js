/* var idade = 200
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 67) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
} */

var vel = 120
console.log(`A sua velocidade é de ${vel}km/h`)
if (vel < 40) {
    console.log('Você está moderada')
} else if (vel <= 60) {
    console.log('Você está a conduzindo a uma velocidade normal')
} else if (vel >= 80) {
    console.log('Você ultrapassou o limite permitido por lei')
} else if (vel > 100) {
    console.log('Você indo muito rápido, poderá causar um acidente')
}