import { Router } from 'express'
import {
    allEmpleado,
    empleadosByID,
    empleadosByNombre,
    empleadosByCargo,
} from '../controllers/empleado/readEmpleado.js'

const routerEmpleado = Router()

routerEmpleado.get('/all', allEmpleado)
routerEmpleado.get('/id/:idValue', empleadosByID)
routerEmpleado.get('/nombre/:nombreValue', empleadosByNombre)
routerEmpleado.get('/cargo/:cargoValue', empleadosByCargo)

export default routerEmpleado
