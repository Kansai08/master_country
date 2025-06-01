import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from './models/user.model';
import { Country } from '../country/models/country.model';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => getModelForClass(User).schema,
      },
      {
        name: Country.name,
        useFactory: () => getModelForClass(Country).schema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
