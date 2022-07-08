var controlador = {};
var m = require("./datosjson/equipos.json");
var tc = require("./datosjson/trabajoscorrectivos.json");
var tp = require("./datosjson/trabajospreventivos.json");


controlador.equipo = (req, res) => {

    const SaveData = {
        nombre: req.body.nombre,
        id: new Date().getTime(),
        descripcion: req.body.descripcion,
        serial: req.body.serial,
        fecha_inicial_de_puesta_en_marcha: req.body.fecha_inicial_de_puesta_en_marcha,
        ultima_fecha_de_puesta_en_marcha: req.body.ultima_fecha_de_puesta_en_marcha,
        ultima_fecha_de_mantenimiento: req.body.ultima_fecha_de_mantenimiento,
        
      };
      m.push(SaveData);
    
      res.send(SaveData);
  

};

//trabajos preventivos

controlador.trabajospreventivos = (req, res) => {

    const SaveData = {
        fecha_planificada_para_el_mantenimiento: req.body.fecha_planificada_para_el_mantenimiento,
        fecha_de_inicio_del_mantenimiento: req.body.fecha_de_inicio_del_mantenimiento,
        fecha_final_del_mantenimiento: req.body.fecha_final_del_mantenimiento,
        estatus_del_mantenimiento: req.body.estatus_del_mantenimiento,

        id: new Date().getTime(),
        
    };

    tc.push(SaveData);
  
    res.send(SaveData);
};

//trabajos correctivos

controlador.trabajoscorrectivos = (req, res) => {

    const SaveData = {
        fecha_planificada_para_el_mantenimiento: req.body.fecha_planificada_para_el_mantenimiento,
        fecha_de_inicio_del_mantenimiento: req.body.fecha_de_inicio_del_mantenimiento,
        fecha_final_del_mantenimiento: req.body.fecha_final_del_mantenimiento,
        estatus_del_mantenimiento: req.body.estatus_del_mantenimiento,

        id: new Date().getTime(),
        
    };

    tc.push(SaveData);
  
    res.send(SaveData);
};

module.exports = controlador;