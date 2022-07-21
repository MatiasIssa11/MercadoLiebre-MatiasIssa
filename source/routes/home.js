const express = require("express");

const router = express.Router();

//Rutas-----------------------------------------------------------------------------------------------------------------

router.get("/", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "views/home.html"));
});

//----------------------------------------------------------------------------------------------------------------------

//Require de los controladores------------------------------------------------------------------------------------------

const homeController = require("../source/controllers/homeController");

//----------------------------------------------------------------------------------------------------------------------

module.exports = router;
