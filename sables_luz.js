// PROBLEMA: QUI-GON JINN está encargado de revisar un arreglo
// de 20 sables de luz y contabilizar la cantidad de sables que
// tienen energías menores a 20 Joules.

// Nota: el formato de cada sable es:
// cable={
// color:v erde,
//  energía: 50 ,
//  portafor: Obi Wan
// }

let sables = [];
for (i = 0; i <= 20; i++) {
  sable = {
    color: "verde",
    energia: i,
    portado: "Obi Wan",
  };
  sable.energia = Math.floor(Math.random() * ((min = 1), (max = 100)));
  sables.push(sable);
}
let sablecitos = sables.filter(function (sable) {
  return sable.energia < 20;
});
console.log(sablecitos.length);