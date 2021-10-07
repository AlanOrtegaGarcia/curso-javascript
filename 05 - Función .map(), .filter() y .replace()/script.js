// Función .map()
const arrayMap = ["Alan", 40, "Ortega", 39, true, "Manzana", false];
const newArrayMap = arrayMap.map((item) => {
  if (typeof item === "string") {
    return item + " Modificado";
  } else if (typeof item == "number") {
    return item * 2;
  } else {
    return item;
  }
});
console.log(newArrayMap);

// Función .filter()
const arrayFilter = ["Alan", "Ortega", 50, 40, true, "Garcia"];
const newArrayFilter = arrayFilter.filter((item) => {
  if (typeof item === "string") {
    return item;
  }
});
console.log(newArrayFilter);

// Función .replace()
const name = "Alan.Ortega_García";
const newName = name.replace(".", " ");
const newFullName = newName.replace("_", " ");
console.log(newFullName)
