const express = require("express"); //requiero modulo express
const app = express(); //asigno a una variable los metodos de express
const rutasProductos = require("./routes/productos")
const rutasHome = require("./routes/home")
const rutasUsuarios = require("./routes/usuarios")

app.listen(3000, () => console.log("El servidor esta corriendo")); // levanto el servidor

app.use("/", rutasHome)
app.use("/productos", rutasProductos)
app.use("/usuarios", rutasUsuarios)



