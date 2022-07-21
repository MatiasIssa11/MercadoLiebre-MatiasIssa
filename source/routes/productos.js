const express = require("express");

const router = express.Router();

//Require de controladores----------------------------------------------------------------------------------------------

const productosController = require("../source/controllers/productosController");

//----------------------------------------------------------------------------------------------------------------------

router.get("/", (req, res) => {
  return res.send("Productos del sitio web");
});

//--------------------------------------------------------------------------------------

router.get("/:idProducto?", (req, res) => {
  let idProducto = req.params.idProducto;
  res.send("Bienvenidos al detalle del producto" + " " + idProducto);
});

//--------------------------------------------------------------------------------------

router.get("/:idProducto/Comentarios/:idComentario?", function (req, res) {
  let idProducto = req.params.idProducto;
  let idComentario = req.params.idComentario;
  if (idComentario === undefined) {
    res.send("Bienvenidos a los Comentarios del producto" + " " + idProducto);
  } else {
    res.send(
      "Bienvenidos a los Comentarios del producto" +
        " " +
        idProducto +
        " y estas enfocado en el comentario" +
        " " +
        idComentario
    );
  }
});

//--------------------------------------------------------------------------------------

module.exports = router;
