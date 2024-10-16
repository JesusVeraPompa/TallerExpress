import { Router } from 'express'
import {
    allEmpleado,
    empleadosByID,
    empleadosByNombre,
    empleadosByCargo,
} from '../controllers/empleado/readEmpleado.js'
import {
    create,createAll
} from '../controllers/empleado/createEmpleado.js'

const routerEmpleado = Router()

routerEmpleado.get('/all', allEmpleado)
routerEmpleado.get('/id/:idValue', empleadosByID)
routerEmpleado.get('/nombre/:nombreValue', empleadosByNombre)
routerEmpleado.get('/cargo/:cargoValue', empleadosByCargo)
routerEmpleado.get('/cargo/:cargoValue', empleadosByCargo)
routerEmpleado.post('/create',create)
routerEmpleado.post('/createAll',createAll)

export default routerEmpleado
