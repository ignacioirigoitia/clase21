const express = require("express"); //requiero modulo express
const router = express.Router()  // utilizo la funcion router de express

router.get("/", function(req, res){
    res.send("Bienvenidos a mi sitio...")
})

module.exports = router