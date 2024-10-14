import { Router } from 'express'
import routerTienda from "./tiendaRouter.js";

const routerIndex = Router()

routerIndex.use('/tiendas',routerTienda)

export default routerIndex;