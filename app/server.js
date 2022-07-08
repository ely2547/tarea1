const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./rutas/mostrar'));
app.use('/', require('./rutas/agregar'));
app.use('/', require('./rutas/eliminar'));
app.use('/', require('./rutas/editar'));


app.listen(process.env.PORT || 3001, () => {
  console.log("servidor corriendo...");
});