const coche = {
  marca: "BMW",
  color: "Rojo",
  precio: 600000,
};
console.log(coche);
const cocheJson = JSON.stringify(coche);
console.log(cocheJson);

const newCoche = '{"marca":"BMW", "color":"Rojo", "precio":"600000"}';
const cocheObject = JSON.parse(newCoche);
console.log(cocheObject.marca)
