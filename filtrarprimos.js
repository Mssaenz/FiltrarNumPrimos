function esPrimo (num) {
    if (num <=1) {
        return false;
    }
    for (let i =2; i <= Math.sqrt(num); i++) {
        if (num % i == 0){
            return false;
        }
    }
    return true;
}

function filtrarPrimos (numeros){
    let primos = [];
    for (let numero of numeros) {
        if (esPrimo (numero)){
            primos.push (numero)
        }
    }
    return primos;
}

const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const numerosPrimos = filtrarPrimos (numeros)
console.log (numerosPrimos);
