'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
//Dado un número entero (o número de JavaScript),
//seguimos dividiendo el número por dos y capturando su resto hasta que el número se convierte en menos de 2.
//Por ejemplo, si tenemos un número 25,
//sigue dividiendo 25 por 2 hasta que obtengamos el cociente menor que 2./
let resul = 0
let numReverse = num.split('').reverse().join('')

for (let i = 0; i < numReverse.length; i++) {
    resul += +num[i] * 2 ** (num.length - 1 - i);

}
return resul;
}
// return parseInt(num,2)
function DecimalABinario(num) {
  let binario = [];
  if(num===0)return 0;
  while (num != 0) {

      binario.push(num % 2);
      num = parseInt(num / 2);
      
  }
  return binario.reverse().join('');
}
// return num.toString(2)

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}


