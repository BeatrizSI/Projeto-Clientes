import { FastifyRequest, FastifyReply } from "fastify";
import {CraeteCustomerService} from '../services/CraeteCustomerService'

class CraeteCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {name, email} = request.body as {name: string, email: string};
        console.log(name);
        console.log(email);

        const customerService = new CraeteCustomerService()

        const customer = await customerService.execute({name,email});

        reply.send(customer)

    }
}

export {CraeteCustomerController}