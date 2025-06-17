import { IClienteRepository } from '../repositories/IClientesRepositori'

export class ClienteServies {
    constructor(private repo: IClienteRepository) { }

    findAll(){
        return this.repo.findAll()
    }

    findById(id: string){
        return this.repo.findById(id)
    }

    // Corrigir tipos: String → string
    create(data: {
        nome: string,
        cpf: string,
        telefone: string,
        endereco: string,
        email: string,
        password: string
    }) {
        return this.repo.create(data)
    }
}