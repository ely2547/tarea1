const express = require("express");
const router = express.Router();
var controladoreliminar = require("../controladores/controladoreliminar")

//eliminar equipos

router.delete("/equipo/:id", (req, res) => {
  controladoreliminar.equipo(req, res);
  });
  
//eliminar trabajos correctivos

router.delete("/trabajos_correctivos/:id", (req, res) => {
  controladoreliminar.trabajoscorrectivos(re, res);
  });
  
  //eliminar trabajos preventivos

  router.delete("/trabajos_preventivos/:id", (req, res) => {
    controladoreliminar.trabajospreventivos(re, res);
  });


  module.exports = router;