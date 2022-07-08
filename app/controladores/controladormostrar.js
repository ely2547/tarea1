var controlador = {};
var m = require("./datosjson/equipos.json");
var tc = require("./datosjson/trabajoscorrectivos.json");
var tp = require("./datosjson/trabajospreventivos.json");


//equipos

controlador.equipos = (req, res) => {

    let f = ''
    for (let i = 0; i < m.length; i++) {
      f = f + `<li>Equipo: ${m[i].nombre} - Id: ${m[i].id}</li>`
    }
      res.send(200, f);
  

};

controlador.equipo = (req, res) => {

    if (isNaN(req.params.id)) {
        res.send(400, {
          message: "Datos no pueden procesarse..."
        });
      } else {
        const dato = m.find(u => u.id == req.params.id); // undefined
        if (dato) {
          res.send(200, dato);
        } else {
          res.send(404, {
            message: "datos no encontrada.."
          });
        }
      }


};

//trabajos preventivos

controlador.trabajospreventivos = (req, res) => {

    res.send(200, tp);
}

//trabajos correctivos

controlador.trabajoscorrectivos = (req, res) => {

    res.send(200, tc);
}

module.exports = controlador;