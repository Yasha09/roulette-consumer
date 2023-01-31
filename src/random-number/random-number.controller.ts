import {Controller, Inject} from '@nestjs/common';
import {ClientProxy, EventPattern} from "@nestjs/microservices";
import {raw, response} from "express";

@Controller('random-number')
export class RandomNumberController {
    constructor(@Inject('ROULETTE_SERVICE') private client: ClientProxy) {
    }

    @EventPattern('roulette')
    async randomNumberGenerate() {
        const randomNumber = Math.floor(Math.random() * 1000);
        await this.client.emit('random_number', randomNumber)
    }
}
