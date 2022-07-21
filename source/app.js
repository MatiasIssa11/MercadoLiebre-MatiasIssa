const { application } = require("express");
const express = require("express");
const path = require("path");
const app = express();
const { ppid } = require("process");

//------------------------------Require de los modulos de rutas-----------------------------------

let rutasHome = require("../routes/home.js");
let rutasProductos = require("../routes/productos.js");

//------------------------------------------------------------------------------------------------

const public = path.resolve(__dirname, "../public");
app.use(express.static(public));

//--------------------- ruta hacia el home del sitio web------------------------------------------

app.listen(1117, () => {
  console.log("Abriendo el servidor http://localhost:1117");
});

app.get("/", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "views/home.html")); //vinculamos el html con la url
});

app.use("/", rutasHome);

//------------------------------------------------------------------------------------------------

app.use("/Productos", rutasProductos);
