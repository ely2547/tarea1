var controlador = {};
var m = require("./datosjson/equipos.json");
var tc = require("./datosjson/trabajoscorrectivos.json");
var tp = require("./datosjson/trabajospreventivos.json");


//equipos

controlador.equipo = (req, res) => {

    if (isNaN(req.params.id)) {
        res.send(400, {
          message: "Datos no pueden procesarse..."
        });
      } else {
        const datoIndex = m.findIndex(u => u.id == req.params.id); // undefined
        if (datoIndex > -1) {
          m.splice(datoIndex, 1);
          res.send(201, {
            message: "Dato eliminado.."
          });
        } else {
          res.send(404, {
            message: "datos no encontrados.."
          });
        }
      }
  

};


//trabajos preventivos

controlador.trabajospreventivos = (req, res) => {

    if (isNaN(req.params.id)) {
        res.send(400, {
          message: "Datos no pueden procesarse..."
        });
      } else {
        const datoIndex = tp.findIndex(u => u.id == req.params.id); // undefined
        if (datoIndex > -1) {
          tp.splice(datoIndex, 1);
          res.send(201, {
            message: "Dato eliminado.."
          });
        } else {
          res.send(404, {
            message: "datos no encontrados.."
          });
        }
      }
}

//trabajos correctivos

controlador.trabajoscorrectivos = (req, res) => {

    if (isNaN(req.params.id)) {
        res.send(400, {
          message: "Datos no pueden procesarse..."
        });
      } else {
        const datoIndex = tc.findIndex(u => u.id == req.params.id); // undefined
        if (datoIndex > -1) {
          tc.splice(datoIndex, 1);
          res.send(201, {
            message: "Dato eliminado.."
          });
        } else {
          res.send(404, {
            message: "datos no encontrados.."
          });
        }
      }
}

module.exports = controlador;