import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryModule } from './country/country.module';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv';
import { AuthModule } from './auth/auth.module';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI!),
    CountryModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}