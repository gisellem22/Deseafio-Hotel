import { Component, OnInit } from '@angular/core';
import { HOTEL } from 'src/app/models/HOTEL';
import { ANSWER } from 'src/app/models/answer'
import { HotelsService } from '../../services/hotels.service'
//import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hotels: HOTEL[];
  answer: ANSWER;

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
    this.answer = new ANSWER (this.initialDate,this.finalDate, this.client);
    console.log(this.answer)
    this.sendAnswer(this.answer)
    //this.router.navigate(['/result']);
  }

  constructor(public HotelsService: HotelsService /*, private router: Router*/) { }

  ngOnInit() {
    this.HotelsService.getHotels().subscribe(hotel => {
      this.hotels = hotel;
      console.log(this.hotels);
    });
  }
  sendAnswer(answer:ANSWER){
    this.HotelsService.getAnswer(answer)
  }
}
