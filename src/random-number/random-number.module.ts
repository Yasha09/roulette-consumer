import {Module} from '@nestjs/common';
import {RandomNumberController} from './random-number.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([{
            name: 'ROULETTE_SERVICE',
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://guest:guest@localhost:5672'],
                queue: 'random_number',
                queueOptions: {
                    durable: false
                }
            }
        }])
    ],
    controllers: [RandomNumberController]
})
export class RandomNumberModule {
}
