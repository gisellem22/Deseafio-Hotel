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

  constructor(public HotelsService: HotelsService) { }

  ngOnInit() {
    this.HotelsService.getHotels().subscribe(hotel => {
      this.hotels = hotel;
      console.log(this.hotels);
    });
  }

}
