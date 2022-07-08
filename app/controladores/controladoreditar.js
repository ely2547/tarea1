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
        const dato = m.find(u => u.id == req.params.id); // undefined
        if (dato) {
          // Modificar...
          // pass by reference.
          // pass by value.
          Object.keys(req.body).forEach(key => {
            dato[key] = req.body[key];
          });
          
          res.status(200).send(dato);
        } else {
          res.send(404, {
            message: "datos no encontrados.."
          });
        }
      }

};

controlador.actualizarequipo = (req, res) => {

    if (isNaN(req.params.id)) {
        res.send(400, {
          message: "Datos no pueden procesarse..."
        });
      } else {
        const dato = m.find(u => u.id == req.params.id); // undefined
        if (dato) {
     
          Object.keys(req.body).forEach(key => {
            dato[key] = req.body[key];
          });
          
          res.status(200).send(dato);
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
        const dato = tp.find(u => u.id == req.params.id); // undefined
        if (dato) {
  
          Object.keys(req.body).forEach(key => {
            dato[key] = req.body[key];
          });
          
          res.status(200).send(dato);
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
        const dato = tc.find(u => u.id == req.params.id); // undefined
        if (dato) {
      
          Object.keys(req.body).forEach(key => {
            dato[key] = req.body[key];
          });
          
          res.status(200).send(dato);
        } else {
          res.send(404, {
            message: "datos no encontrados.."
          });
        }
      }
}

module.exports = controlador;