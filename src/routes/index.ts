import { Router } from "express"
import {clientesRoutes} from './clientes-routes'
export const routes = Router()

routes.use('/clientes', clientesRoutes)