import { Router } from "express";

import { ClientesController } from '../controllers/clientes-controller'

const clientesController = new ClientesController()

export const clientesRoutes = Router()

clientesRoutes.get('/', clientesController.getAll) // resgatar todos os clientes
clientesRoutes.get('/:id', clientesController.getById)
clientesRoutes.post('/', clientesController.created)
clientesRoutes.put('/:id', clientesController.updated)
