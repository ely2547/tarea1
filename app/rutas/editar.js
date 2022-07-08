const express = require("express");
const router = express.Router();
var controladoreditar = require("../controladores/controladoreditar")


//editar equipos

router.put("/equipo/:id", (req, res) => {
  controladoreditar.equipo(req, res);
  });

  //actualizar id y fechas

  router.put("/trabajo_equipo/:id", (req, res) => {
    controladoreditar.actualizarequipo(req, res);
  });
  
  //editar trabajos correctivos

  router.put("/trabajos_correctivos/:id", (req, res) => {
    controladoreditar.trabajoscorrectivos(req, res);
  });

  //editar trabajos preventivos

  router.put("/trabajos_preventivos/:id", (req, res) => {
    controladoreditar.trabajospreventivos(req, res);
  });

  module.exports = router;
