/*function fatorial (n) {
    let fat = 1 
    for (let i = n; i > 1; i--) {
        fat *= i
        
    }
    return fat
}

console.log(fatorial(3))*/

// RECURSIVIDADE NAS FUNÇÕES
function fatorial (n) {
    if(n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))