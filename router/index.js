import { Router } from 'express'
import routerTienda from "./tiendaRouter.js";
import routerProducto from "./productoRouter.js";
import routerEmpleado from "./empleadoRouter.js";

const routerIndex = Router()

routerIndex.use('/tiendas',routerTienda)
routerIndex.use('/productos',routerProducto)
routerIndex.use('/empleados',routerEmpleado)

export default routerIndex;