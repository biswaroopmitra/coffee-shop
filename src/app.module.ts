import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MIKROORM_CONFIG } from './mikro-orm.config';
import { ProductModule } from './masters/sandwich/product.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(MIKROORM_CONFIG),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
