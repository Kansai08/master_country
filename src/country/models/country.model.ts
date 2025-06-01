import { prop, getModelForClass } from '@typegoose/typegoose';

export class Country {
  @prop({ required: true })
  name: string;
}
