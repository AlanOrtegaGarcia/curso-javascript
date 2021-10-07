const express = require("express");
const path = require("path");
const app = express();

// Routes
app.use(express.static(path.join(__dirname, "public")));

// Settings
app.set("port", process.env.PORT || 3000);

// Starting Server
app.listen(app.get("port"), () => {
  console.log("El servidor está corriendo en el puerto:", app.get("port"));
});
