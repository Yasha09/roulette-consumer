import {Module} from '@nestjs/common';

import {RandomNumberModule} from './random-number/random-number.module';

@Module({
    imports: [RandomNumberModule],
})
export class AppModule {
}
