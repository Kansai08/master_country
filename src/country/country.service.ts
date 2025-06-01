import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from './models/country.model';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name)
    private readonly countryModel: Model<Country>,
  ) {}

  async create(name: string) {
    const country = new this.countryModel({ name });
    return country.save();
  }

  async findAll() {
    return this.countryModel.find().exec();
  }
}
