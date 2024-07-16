var num = [9,4,7,5,1]

console.log(num)
//num.sort()
/*for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}*/

for (let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}