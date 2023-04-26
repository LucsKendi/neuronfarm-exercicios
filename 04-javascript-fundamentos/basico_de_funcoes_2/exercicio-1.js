let imc = calculaImc (78, 1.71).toFixed(2);
function calculaImc (a, b) {
    return a / (b * b);
}
console.log("O IMC é " + imc);