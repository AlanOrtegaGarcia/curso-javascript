const usuario = {
  name: "Alan",
  surname: "Ortega",
  edad: 22,
};

const usuarioString = JSON.stringify(usuario);
localStorage.setItem("usuario", usuarioString);

let userStorage = localStorage.getItem("usuario");
userStorage = JSON.parse(userStorage);
console.log(userStorage.name);

localStorage.removeItem("usuario");
