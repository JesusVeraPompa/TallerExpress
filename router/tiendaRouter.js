import { Router } from 'express'
import {
    allTienda,
    tiendasByID,
    tiendasByDireccion,
    tiendasByNombre,
} from '../controllers/tienda/readTienda.js'
import {
    create,createAll
} from '../controllers/tienda/createTienda.js'

const routerTienda = Router()

routerTienda.get('/all', allTienda)
routerTienda.get('/id/:idValue', tiendasByID)
routerTienda.get('/direccion/:direccionValue', tiendasByDireccion)
routerTienda.get('/nombre/:nombreValue', tiendasByNombre)
routerTienda.post('/create',create)
routerTienda.post('/createAll',createAll)

export default routerTienda
