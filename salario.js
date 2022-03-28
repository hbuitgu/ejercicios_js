// PROBLEMA: Watto paga a su personal de ventas un salario de
// 3500000 mensuales, más una comisión de 1500000 por cada
// nave vendida, menos el 5% de deducciones aplicada solo a las
// comisiones. Codifica un programa que calcule e imprima el
// salario mensual de un vendedor dado;

let texto = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  texto.question('ingrese la cantidad de naves vendidas este mes: ', naves => {
    comision_nave= (1500000*naves)
    total_comision=comision_nave*5/100
   console.log(total_comision)
  texto.close();
})