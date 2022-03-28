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
    comision_naves_vendias= (1500000*naves)
    descuento_comision=comision_naves_vendias*0.05
    total_pago=(comision_naves_vendias-descuento_comision)+3500000
     console.log(`su pago este mes es de ${total_pago}`)
 texto.close();
})