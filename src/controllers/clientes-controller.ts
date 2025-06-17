import {Request, Response} from 'express'

export class ClientesController {
    index(request: Request, response: Response){

        response.json({messagem: 'todos os usuarios'})
    }
    
}