require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/userRoutes");
const APP_PORT = 3000;
const app = express();

mongoose.connect("mongodb://localhost/ejercicio6_mongodb");

mongoose.connection
  .once("open", () =>
    console.log("¡Conexión con la base de datos establecida!")
  )
  .on("error", (error) => console.log(error));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(routes);

app.listen(APP_PORT, () => {
  console.log(`[Express] Servidor Corriendo en el puerto: ${APP_PORT}`);
});
