const user = {
  name: "Alan",
  lastname: "Ortega",
  active: true,
  createAt: new Date().getFullYear(),
};

const { name, lastname, active, createAt } = user;

const verifyUser = () => {
  return active
    ? console.log(`El usuario ${name} ${lastname} se encuentra activo en el año ${createAt}`)
    : console.log(`El usuario ${name} ${lastname} no se encuentra activo`);
};

verifyUser();
