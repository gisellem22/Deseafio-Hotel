import { RATE } from 'src/app/models/rate'

export class HOTEL {
    public id?: number;
    public name?: string;
    public rating?: number;
    public img?: string;
    public regularCustomers?: RATE[];
    public loyaltyProgramCustomers?: RATE[];
    public total?: number;

    
    constructor(id: number, name: string, rating: number,img: string,regularCustomers: RATE[],loyaltyProgramCustomers: RATE[], total: number) {
      this.id = id,
      this.name = name,
      this.rating = rating,
      this.img = img,
      this.regularCustomers = regularCustomers,
      this.loyaltyProgramCustomers = loyaltyProgramCustomers,
      this.total = total
  }
  }