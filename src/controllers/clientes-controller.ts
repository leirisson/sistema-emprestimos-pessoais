import { Request, Response } from 'express'
import { ClienteServies } from '../services/cliente-services'
import { PrismaClientRpository } from '../repositories/PrismaProductRepository'


const service = new ClienteServies(new PrismaClientRpository());

export class ClientesController {
    async getAll(request: Request, response: Response) {
        try {
            const clientes = await service.findAll()

            if (clientes.length === 0) {
                response.json({ menssagem: 'Nem um cliente encontrado.' })
            }

            response.json(clientes)
        } catch (error) {
            response.json(error)
        }
    }

    async created(request: Request, response: Response) {
        try {
            const {nome, cpf, telefone, endereco, email, password} = request.body

            await service.create({nome, cpf, telefone, endereco, email, password})

            response.status(201).json()
        } catch (error) {
            
        }
    }

}