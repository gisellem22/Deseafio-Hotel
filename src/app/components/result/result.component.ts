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
  dateFrom: string;
  dateTo: string;
  clientType: string;
  checkIn: Date;
  checkOut: Date;
  stayDays: Date[] = [];
  weekDays: Date[] = [];
  weekEnds: Date[] = [];
  lowestRate: HOTEL = {};
  theLowestHotelRate: HOTEL[] = [];

  realDate() {
    this.checkIn = new Date(this.dateFrom);
    this.checkIn.setDate(this.checkIn.getDate() + 1);
    this.checkOut = new Date(this.dateTo);
    this.checkOut.setDate(this.checkOut.getDate() + 1);
    this.findStayDays(this.checkIn, this.checkOut)
  }

  findStayDays(initialD: Date, theLowestHotelRateD: Date) {
    this.stayDays = [];
    let currentDate: Date = initialD;
    while (currentDate <= theLowestHotelRateD) {
      this.stayDays.push(currentDate);
      currentDate = this.addDate(currentDate);
    }
    this.isWDayOrWEnd()
    // return this.stayDays;
  }
  addDate(currentDate: Date) {
    let date = new Date(currentDate);
    date.setDate(date.getDate() + 1);
    return date;
  }
  isWDayOrWEnd() {
    this.weekDays = [];
    this.weekEnds = [];
    this.stayDays.forEach(day => {
      if (day.getDay() == 6 || day.getDay() == 0) {
        this.weekEnds.push(day);
      } else {
        this.weekDays.push(day);
      }
    })
    this.hotelsRate(this.weekDays.length, this.weekEnds.length)
  }
  hotelsRate(wDaysTotal: number, wEndsTotal: number) {
    let hotelsRateList: any = [];
    let amount: number;
    this.hotels.forEach(hotel => {
      if (this.clientType === "Regular") {
        hotel.regularCustomers.forEach(rate => {
          amount = (rate.weekDay * wDaysTotal) + (rate.weekEnd * wEndsTotal);
          hotelsRateList.push([hotel.name, amount, hotel.rating, hotel.img])
        })
      } else {
        hotel.loyaltyProgramCustomers.forEach(rate => {
          amount = (rate.weekDay * wDaysTotal) + (rate.weekEnd * wEndsTotal);
          hotelsRateList.push([hotel.name, amount, hotel.rating, hotel.img])
        })
      }
    })
    this.findLowerRate(hotelsRateList);
  }

  findLowerRate(hotelList) {
    let lowerRate = hotelList.reduce(function (prev, curr) {
      return prev[1] < curr[1] ? prev : curr;
    });
    let evenRate = [];
    hotelList.forEach(hotel => {
      if (hotel[1] === lowerRate[1]) {
        evenRate.push(hotel)
      }
    })
    let evenResult = evenRate.reduce(function (prev, curr) {
      return prev[1] > curr[1] ? prev : curr;
    });
      this.lowestRate.name = evenResult[0];
      this.lowestRate.total = evenResult[1];
      this.lowestRate.rating = evenResult[2];
      this.lowestRate.img = evenResult[3];
      this.theLowestHotelRate = [this.lowestRate]
  }


  constructor(public HotelsService: HotelsService) { }

  ngOnInit() {
    this.HotelsService.getHotels().subscribe(hotel => {
      this.hotels = hotel;
    });

    this.HotelsService.getAnswerObservable.subscribe(answer => {
      this.dateFrom = answer.from;
      this.dateTo = answer.to;
      this.clientType = answer.client;
      this.realDate()
    });
  }

}
