const express = require("express"); //requiero modulo express
const router = express.Router()  // utilizo la funcion router de express

router.get("/", function(req, res){
    res.send("Todos los usuarios")
})

router.get("/:id?", function(req, res){
    let idUsuario = req.params.id
    res.send("Este es el usuario " + idUsuario)
})

module.exports = router 