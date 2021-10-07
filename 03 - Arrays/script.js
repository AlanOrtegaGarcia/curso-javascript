const array = ["Manzana", 40, "Pelota", "Juguete", true, false];
const arrayDos = ["Otro", "Arreglo"];

// Concat nos permite combinar uno o más arreglos.
const otroArray = array.concat(arrayDos);

// Push nos permite ingresar un nuevo elemento al final del arreglo.
array.push("Otro item");

// Shift nos permite eliminar el primer elemento del arreglo.
array.shift();

// Unshift nos permite agregar un elemento al principio del arreglo.
array.unshift("Primer elemento");

// Sort nos permite ordenar el arreglo.
array.sort();

// Pop nos permite eliminar el último elemento del arreglo.
array.pop();

// IndexOf nos permite encontrar la posición de un elemento en el arreglo.
const index = array.indexOf("Pelota");
console.log(array[index]);

// Length nos permite obtener el tamaño del arreglo.
const length = array.length;

// Reverse nos permite invertir los elementos del arreglo.
array.reverse();

console.log(array);
console.log(length);
