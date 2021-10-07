let nombre = null;

function actualizarNombre() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Alan Ortega");
    }, 1000);
  });
}

async function saludar() {
  nombre = await actualizarNombre();
  console.log("Hola me llamo", nombre);
}

saludar();
