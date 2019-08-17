import { Component, OnInit } from '@angular/core';
import { HOTEL } from 'src/app/models/HOTEL';
import { HotelsService } from '../../services/hotels.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hotels: HOTEL[];

  initialDate: string;
  finalDate: string;
  client:string;

  fromDate(event: any) {
    this.initialDate = event.target.value;
    console.log(this.initialDate);
  }
  toDate(event: any) {
    this.finalDate = event.target.value;
    console.log(this.finalDate);
  }
  onChange(event: any){
    this.client = event.target.value;
    console.log(this.client);
  }
  getResult(){
    console.log("from: ", this.initialDate,"to: ", this.finalDate, "cliente: ", this.client)
  }

  constructor(public HotelsService: HotelsService) { }

  ngOnInit() {
    this.HotelsService.getHotels().subscribe(hotel => {
      this.hotels = hotel;
      console.log(this.hotels);
    });
  }

}
