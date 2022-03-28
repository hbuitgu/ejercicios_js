// 1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices
// Padawan a calcular la distancia a la que cualquiera de los planetas de la
// ruta N-14 pertenecientes a la ruta comercial de la federación
// intergaláctica, se encuentra del planeta NABOO.
// Para calcular dicha distancia se debe:
// • Recibir las coordenadas X,Y del planeta en UA
// • Establecer la distancia como:
//raiz cuadradade (x2-x1)elevado al cuadrado + (Y2-Y1)elevado al cuadrado



//funcion tradicional para calcular la distancia entre dos puntos.
// function calcular_distancia(x1,y1,x2,y2){
//         return (Math.sqrt(Math.pow((x2-x1),2 )+Math.pow((y2-y1),2 )))
// }

let calcular_distancia=(x1,y1,x2,y2)=> Math.sqrt(Math.pow((x2-x1),2 )+Math.pow((y2-y1),2 ))
     


//llamando la funcion
     let distancia =calcular_distancia(0,0,-10,-10).toFixed(2)
console.log(`la distancia calculada es ${distancia}`)