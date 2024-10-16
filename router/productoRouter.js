import { Router } from 'express'
import {
    allProducto,
    productosByID,
    productosByMarca,
    productosByTipo,
} from '../controllers/producto/readProducto.js'
import {
    create,createAll
} from '../controllers/producto/createProducto.js'

const routerProducto = Router()

routerProducto.get('/all', allProducto)
routerProducto.get('/id/:idValue', productosByID)
routerProducto.get('/marca/:marcaValue', productosByMarca)
routerProducto.get('/tipo/:tipoValue', productosByTipo)
routerProducto.post('/create',create)
routerProducto.post('/createAll',createAll)

export default routerProducto