import { Router } from "express";

import { ClientesController } from '../controllers/clientes-controller'

const clientesController = new ClientesController()

export const clientesRoutes = Router()

clientesRoutes.get('/', clientesController.getAll) // resgatar todos os clientes
clientesRoutes.post('/', clientesController.created)
