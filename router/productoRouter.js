import { Router } from 'express'
import {
    allProducto,
    productosByID,
    productosByMarca,
    productosByTipo,
} from '../controllers/producto/readProducto.js'

const routerProducto = Router()

routerProducto.get('/all', allProducto)
routerProducto.get('/id/:idValue', productosByID)
routerProducto.get('/marca/:marcaValue', productosByMarca)
routerProducto.get('/tipo/:tipoValue', productosByTipo)

export default routerProducto