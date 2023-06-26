import { EntityRepository, Repository } from 'typeorm';
import { Customer } from './customers.entity';

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {
    // Custom repository methods and queries
}
