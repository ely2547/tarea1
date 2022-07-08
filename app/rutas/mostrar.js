const express = require("express");
const router = express.Router();
var controladormostrar = require("../controladores/controladormostrar")

router.get("/equipos", (req, res) => {

  controladormostrar.equipos(req, res);
  });

router.get("/equipo/:id", (req, res) => {
  controladormostrar.equipo(req, res);
  });

  // trabajos correctivos
  router.get("/trabajos_correctivos", (req, res) => {
    controladormostrar.trabajoscorrectivos(req, res);
  });

  //trabajos preventivos

  router.get("/trabajos_preventivos", (req, res) => {
    controladormostrar.trabajospreventivos(req, res);
  });


  module.exports = router;