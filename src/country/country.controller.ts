import { Controller, Get, Post, Body } from '@nestjs/common';
import { CountryService } from './country.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateCountryDto } from './dto/create-country.dto';

@Controller('country')
@ApiTags('Country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new country' })
  @ApiBody({ type: CreateCountryDto })
  @ApiResponse({ status: 201, description: 'Country created successfully' })
  async create(@Body() body: CreateCountryDto) {
    return this.countryService.create(body.name);
  }

  @Get()
  @ApiOperation({ summary: 'Get all countries' })
  @ApiResponse({ status: 200, description: 'List of countries' })
  async findAll() {
    return this.countryService.findAll();
  }
}
