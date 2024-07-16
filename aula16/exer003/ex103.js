let numero = document.querySelector('.nums')
let text = document.querySelector('.text')
let res = document.querySelector('.res')
let nums = []


function adicionar() {
    if (numero.value.length == 0 || nums.includes(Number(numero.value)) || numero.value > 100 || numero.value < 1) {
        alert('Valor inválido ou já presente na lista')
    } else {    
        nums.push(Number(numero.value))
        text.value += `Número ${numero.value} adicionado\n`
        res.innerHTML = ''
    }
    numero.value = ''
    numero.focus()
}

function finalizar () {
    if (text.value == '') {
        alert('Insira os valores antes de finalizar')
    } else {
        res.innerHTML = `No total, ${nums.length} números foram adicionados<br>`

        let maior = nums[0]
        let menor = nums[0]
        let soma = 0
        //let media = 0
        for (let pos in nums) {
            if(nums[pos] > maior){
                maior = nums[pos]
            }
            if(nums[pos] < menor){
                menor = nums[pos]
            }
            soma += nums[pos]
            media = soma / nums.length
        }

        //let high = Math.max(...nums)
        res.innerHTML += `O maior número registado foi ${maior}.<br>`

        //let low = Math.min(...nums)
        res.innerHTML += `O menor número registado foi ${menor}<br>`
        
        /*for (let n = nums.length - 1; n >= 0; n--) {
            let soma 
            soma += nums[n]
        }*/

        res.innerHTML += `A soma dos valores é igual a ${soma}<br>`

        //let media = soma / nums.length
        res.innerHTML += `A média é igual a ${media}<br>`
    }
    }