let ventilador = {
  altura: "200cm",
  color: "Negro",
  potencia: "100W",
  helices: {
    tamano: "10cm",
    material: "Plastico",
    color: "Blanco",
    precio: {
      precio1: 20,
      precio2: 40,
      casa: {
        casa1: "La mia",
        casa2: "La tuya",
      },
    },
  },
};

console.log(ventilador.helices.precio.casa.casa1);
