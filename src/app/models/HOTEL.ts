import { RATE } from 'src/app/models/rate'

export class HOTEL {
    public id: number;
    public name: string;
    public rating: number;
    public regularCustomers: RATE[];
    public loyaltyProgramCustomers: RATE[];
    
    constructor(id: number, name: string, rating: number,regularCustomers: RATE[],loyaltyProgramCustomers: RATE[]) {
      this.id = id,
      this.name = name,
      this.rating = rating,
      this.regularCustomers = regularCustomers,
      this.loyaltyProgramCustomers = loyaltyProgramCustomers
  }
  }