// : Obi-Wan Kenobi, necesita clasificar diferentes códigos de
// acceso a las naves de guerra los cuáles reposan en la base de datos
// central, para ello debe programar una función que permita recibir la
// palabra clave de cada nave y separar imprimiendo solo el nombre del
// piloto asignado a cada nave.
// Tenga en cuenta que el formato de todos los datos es el siguiente:
// • ARQ2555: Sara Bel-Sun
// • ARQ2556: Nodin Chavdri
// • ARQ2557: Finn

let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('ingrese la clave de la nave: ', piloto => {
  console.log(piloto = "para la nave: "+ piloto.split(":")[0]+" el piloto asigando es: "+ piloto.split(":")[1])
  readline.close();
})
  