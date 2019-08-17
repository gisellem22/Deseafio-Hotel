import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';

import { HOTEL } from 'src/app/models/HOTEL'
import { hotels } from 'src/app/hotel-mock'
import { ANSWER } from '../models/answer';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {
answer: ANSWER;

public getAnswerSubject = new Subject <ANSWER>();
getAnswerObservable = this.getAnswerSubject.asObservable();

getAnswer(answer:ANSWER){
this.answer = answer;
this.getAnswerSubject.next(answer);
}

  constructor() { }
  
  getHotels(): Observable<HOTEL[]> {
    return of(hotels);
  }
}
