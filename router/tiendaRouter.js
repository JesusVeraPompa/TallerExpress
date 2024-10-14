import { Router } from 'express'
import {
    allTienda,
    tiendasByID,
    tiendasByDireccion,
    tiendasByNombre,
} from '../controllers/tienda/readTienda.js'

const routerTienda = Router()

routerTienda.get('/all', allTienda)
routerTienda.get('/id/:idValue', tiendasByID)
routerTienda.get('/direccion/:direccionValue', tiendasByDireccion)
routerTienda.get('/nombre/:nombreValue', tiendasByNombre)

export default routerTienda
