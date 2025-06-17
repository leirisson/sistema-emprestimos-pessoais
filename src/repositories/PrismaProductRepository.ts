import { PrismaClient, Cliente } from '../generated/prisma'
import { IClienteRepository } from './IClientesRepositori'

const prisma = new PrismaClient()

// implementando o repositorio do prisma
export class PrismaClientRpository implements IClienteRepository {

    findAll(): Promise<Cliente[]> {
        return prisma.cliente.findMany()
    }

    // pesquisando um cliente por seu ID
    findById(id: string): Promise<Cliente | null> {
        return prisma.cliente.findUnique({
            where: {
                id
            }
        })
    }

    create(data: Omit<Cliente, 'id' | 'cretedAt' | 'updtatedAt'>): Promise<Cliente> {
        return prisma.cliente.create({ data })
    }

    update(id: string, data: Partial<Omit<Cliente, 'id' | 'createdAt' | 'updtatedAt'>>): Promise<Cliente> {

        return prisma.cliente.update(
            {
                where: {
                    id
                },
                data
            }
        )
    }

    async delete(id: string): Promise<void> {
        await prisma.cliente.delete({where: {id}})
    }


}