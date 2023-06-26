import {Controller, Get} from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}
  @Get('')
  async findAll() {
    return await this.customerService.findAll();
  }
}
