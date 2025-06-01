import { prop, Ref } from '@typegoose/typegoose';
import { Country } from 'src/country/models/country.model';

export class User {
  @prop({ required: true })
  username: string;

  @prop({ required: true, unique: true })
  email: string;

  @prop({ required: true })
  password: string;

  @prop({ ref: () => Country, required: true })
  country: Ref<Country>;
}
