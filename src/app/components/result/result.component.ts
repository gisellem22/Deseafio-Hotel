import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service'
import { ANSWER } from 'src/app/models/answer';
import { HOTEL } from 'src/app/models/HOTEL';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  hotels: HOTEL[];
  clientAnswer: ANSWER;
  from: string;
  to: string;
  client: string;
  dateFrom: Date;
  dateTo: Date;
  dates: Date[] = [];
  weekDAYS: Date[] = [];
  weekENDS: Date[] = [];
  result: any;

  realDate() {
    this.dateFrom = new Date(this.from);
    this.dateFrom.setDate(this.dateFrom.getDate() + 1);
    this.dateTo = new Date(this.to);
    this.dateTo.setDate(this.dateTo.getDate() + 1);    
    this.getDates(this.dateFrom, this.dateTo)
  }

  getDates(initialD: Date, finalD: Date) {
    let currentDate: Date = initialD;
    while (currentDate <= finalD) {
      this.dates.push(currentDate);
      currentDate = this.addDate(currentDate);
    }
    this.days()
    console.log("dates", this.dates)
    return this.dates;
  }
  addDate(currentDate: Date) {
    let date = new Date(currentDate);
    date.setDate(date.getDate() + 1);
    return date;
  }
  days() {
    this.dates.forEach(element => {
      if (element.getDay() == 6 || element.getDay() == 0) {
        this.weekENDS.push(element);
      } else {
        this.weekDAYS.push(element);
      }
    })
    console.log(this.weekDAYS, this.weekDAYS.length);
    console.log(this.weekENDS, this.weekENDS.length);
    this.getTotal(this.weekDAYS.length,this.weekENDS.length)
  }
  getTotal(wDaysTotal:number, wEndsTotal:number) {
    let total: any = [];
    this.hotels.forEach(hotel => {
      if (this.client === "Regular") {
        hotel.regularCustomers.forEach(rate => {
          let amount: number = (rate.weekDay * wDaysTotal) + (rate.weekEnd * wEndsTotal);
          total.push([hotel.name, amount])
        })
      } else {
        hotel.loyaltyProgramCustomers.forEach(rate => {
          let amount: number = (rate.weekDay * wDaysTotal) + (rate.weekEnd * wEndsTotal);
          total.push([hotel.name, amount])
        })
      }
    })
    console.log(total);
    this.getResult(total);
  }
  getResult(array) {
    console.log("array111111111", array)
    this.result = array.reduce(function(prev, curr) {
      return prev[1] < curr[1] ? prev : curr;
  });
  console.log("TheRESULT",this.result);
  }


  constructor(public HotelsService: HotelsService) { }

  ngOnInit() {
    this.HotelsService.getHotels().subscribe(hotel => {
      this.hotels = hotel;
      console.log(this.hotels);
    });

    this.HotelsService.getAnswerObservable.subscribe(answer => {
      this.clientAnswer = answer;
      this.from = this.clientAnswer.from;
      this.to = this.clientAnswer.to;
      this.client = this.clientAnswer.client;
      console.log(this.clientAnswer)
      this.realDate()
    });
  }

}
