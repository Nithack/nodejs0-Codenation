'use strict'

const fibonacci = (listFibonacci = [0, 1]) => {
    while (listFibonacci.slice(-1) <= 250) {
        listFibonacci.push(Number(listFibonacci.slice(-1)) + Number(listFibonacci.slice(-2, -1)))
    }
    return listFibonacci
}

const isFibonnaci = (num) => fibonacci().includes(num)

module.exports = {
    fibonacci,
    isFibonnaci
}
