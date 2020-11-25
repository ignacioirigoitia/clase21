
const express = require("express"); //requiero modulo express
const router = express.Router()  // utilizo la funcion router de express

router.get("/", function(req, res){
    res.send("Todos los productos")
})
router.get("/:id?/:descripcion?", function(req, res){ //:id es un parametro que te indica a que producto queres dirigirte, si agregamos el signo de interrogacion hace que NO sea obligatorio agregar el ID

    let idProducto = req.params.id //params te atrapa los parametros que estas procesando (LO QUE SE ENVIA EN EL APP.GET)
    let descripcion = "no hay"

    if(req.params.descripcion != undefined){
        descripcion = req.params.descripcion
    }
    
    res.send("Este es el producto numero " + idProducto + " - Descripcion: " + descripcion)
    
})

module.exports = router