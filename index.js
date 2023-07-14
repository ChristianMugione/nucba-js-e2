const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// console.log(pizzas[1]['nombre']);
// console.log(pizzas[1].nombre);

/* 
Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:
*/

console.log('Punto a: Las pizzas que tengan un id impar');
console.log('');

// for (let i = 0; i < pizzas.length; i++){
//   if (pizzas[i].id % 2 === 1){
//     console.log(`${pizzas[i].nombre} (id: ${pizzas[i].id})
//     Ingredientes: ${pizzas[i].ingredientes.join(', ')}
//     `);
//   }
// }

pizzas.forEach( function(unaPizza) {
  if (unaPizza.id % 2 !== 0) {
    console.log(`${unaPizza.nombre} (id: ${unaPizza.id})
    Ingredientes: ${unaPizza.ingredientes.join(', ')}
    `);
  }
}
)


console.log('------------------------------------------');
console.log('Punto b: Responder: \¿Hay alguna pizza que valga menos de $600\?');
console.log('');

let hay = false;
let pizzasBaratas = [];
for (let i = 0;  i < pizzas.length; i++) {
  if (pizzas[i].precio < 600) {
    hay = true;
    pizzasBaratas.push(i);
  } 
}

if (hay === false) {
  console.log('La respuesta es: No, no hay ninguna pizza cuyo valor sea menor que $ 600,-');
} else {
  console.log('La respuesta es: Si, hay pizzas cuyo valor es menor que $ 600,-');
  pizzasBaratas.forEach(id =>
    console.log(pizzas[id].nombre)
    )
}

console.log('------------------------------------------');
console.log('Punto c: El nombre de cada pizza con su respectivo precio.');
console.log('');

pizzas.forEach( cadaPizza => 
  console.log(`${cadaPizza.nombre}. Precio: $${cadaPizza.precio},- ` )
  )

console.log('------------------------------------------');
console.log('Punto d: Todos los ingredientes de cada pizza.');
console.log('');

pizzas.forEach( function(listaPizza) { 
  let listaIng = [];
  listaPizza.ingredientes.forEach( cadaIng =>
    listaIng.push(cadaIng)
    )
    let ultimoIng = listaIng.pop();
    console.log(`La ${listaPizza.nombre} tiene: ${listaIng.join(', ')} y ${ultimoIng}.`)
  }
  )
  console.log('------------------------------------------');
  