// . PROBLEMA: Grogu ha iniciado su entrenamiento Jedi y debe activar un software que permita clasificar su dieta:
// alimento = {
//  nombre,
//  tipo (Puede ser vegetal, animal, insecto),
//  nivel de energía (números entre 100-500)

// }
// Cree un programa que permita recibir 50 alimentos diferentes y mediante una función primaria después de 5 segundos se  pueda obtener solo los alimentos de tipo vegetal que entreguen mas de 200 unidades de energía. Finalmente, una función callback debe permitir entregar la sumatoria de niveles de energía entregados por los alimentos vegetales consumidos en la dieta de Grogu.

let alimentos = [
  //vegetales
  { nombre: "Wasabi", tipo: "	", cantidad_KCL: 309 },
  {
    nombre: "Olivas verdes / Aceitunas verdes",
    tipo: "CALÓRICA VEGETABLES",
    cantidad_KCL: 300,
  },
  {
    nombre: "Ocra / Quimbombó",
    tipo: "CALÓRICA VEGETABLES",
    cantidad_KCL: 220,
  },
  { nombre: "Espárragos", tipo: "", cantidad_KCL: 223 },
  //PASTAS
  { nombre: "Fideos cocidos	", tipo: "CALÓRICA PASTA", cantidad_KCL: 142 },
  {
    nombre: "Pasta de espelta, cocida",
    tipo: "CALÓRICA PASTA",
    cantidad_KCL: 128,
  },
  { nombre: "Farfalle cocidas	", tipo: "CALÓRICA PASTA", cantidad_KCL: 135 },
  { nombre: "Tallarines cocidos	", tipo: "CALÓRICA PASTA", cantidad_KCL: 147 },
  {
    nombre: "Fideos transparentes cocidos",
    tipo: "CALÓRICA PASTA",
    cantidad_KCL: 159,
  },
  {
    nombre: "Espaguetis integrales cocidos",
    tipo: "CALÓRICA PASTA",
    cantidad_KCL: 124,
  },
  { nombre: "Albaricoque", tipo: "CALÓRICA PASTA", cantidad_KCL: 243 },
];

function filtro_alimentos_vegetales() {
  setTimeout(function () {
    let filtrado_alimento = alimentos.filter(function (alimento) {
      return (
        alimento.tipo == "CALÓRICA VEGETABLES" && alimento.cantidad_KCL >= 200
      );
    });
    console.log(filtrado_alimento);
  }, 5000);
}

function contar_calorias_vegetales() {
  let suma = 0;
  filtrado_alimento.forEach(function (alimento) {
    suma += suma + alimento.filtrado_alimento.cantidad_KCL;
    console.log(suma);
  });
}

filtro_alimentos_vegetales();
contar_calorias_vegetales();