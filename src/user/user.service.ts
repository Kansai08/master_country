import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './models/user.model';
import { Country } from '../country/models/country.model';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Country.name) private readonly countryModel: Model<Country>,
  ) {}

  async register(username: string, email: string, password: string, countryId: string) {
    const existing = await this.userModel.findOne({ email });
    if (existing) throw new BadRequestException('Email already registered');

    const country = await this.countryModel.findById(countryId);
    if (!country) throw new BadRequestException('Invalid country');

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({
      username,
      email,
      password: hashedPassword,
      country,
    });

    return user.save();
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) throw new BadRequestException('Invalid email or password');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new BadRequestException('Invalid email or password');

    const payload = {
      sub: user._id,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });
    return { token };
  }

  async findAll() {
    return this.userModel.find().populate('country').select('-password');
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email }).populate('country');
  }
}
