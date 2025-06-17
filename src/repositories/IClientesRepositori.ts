import { Cliente } from '../generated/prisma'

export interface IClienteRepository {
    findAll(): Promise<Cliente[]>     // promessa de retorna uma lista de clientes
    findById(id: string): Promise<Cliente | null>
    create(data: Omit<Cliente, 'id' | 'createdAt'| 'updatedAt'>): Promise<Cliente>
    update(id: string, data: Partial<Omit<Cliente, "id" | "createdAt" | "updatedAt">>): Promise<Cliente>
    delete(id: string): Promise<void>
}