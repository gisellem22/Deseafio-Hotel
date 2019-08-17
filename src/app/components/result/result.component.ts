import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service'
import { ANSWER } from 'src/app/models/answer';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  clientAnswer:ANSWER;

  constructor(public HotelsService:HotelsService) { }

  ngOnInit() {
    this.HotelsService.getAnswerObservable.subscribe(answer => {
      this.clientAnswer =answer;
      console.log(this.clientAnswer)
    });
  }

}
