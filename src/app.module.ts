import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [ProductsModule,MongooseModule.forRoot('mongodb+srv://amine:amine@cluster0.f6jpk.mongodb.net/nestjs-crud?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
