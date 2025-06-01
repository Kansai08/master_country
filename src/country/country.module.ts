import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Country } from './models/country.model';
import { getModelForClass } from '@typegoose/typegoose';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Country.name,
        useFactory: () => {
          const model = getModelForClass(Country);
          return model.schema;
        },
      },
    ]),
  ],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}