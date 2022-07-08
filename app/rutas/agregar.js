
const express = require("express");
const router = express.Router();
var controladoragregar = require("../controladores/controladoragregar")

//guardar equipo

router.post("/equipo", (req, res) => {
  controladoragregar.equipo(req, res);
  
  });

//guardar trabajos correctivos

router.post("/trabajos_correctivos", (req, res) => {
    controladoragregar.trabajoscorrectivos(req, res);

  });

//guardar trabajos preventivos

router.post("/trabajos_preventivos", (req, res) => {
      controladoragregar.trabajospreventivos(req, res);
    
    });

  module.exports = router;