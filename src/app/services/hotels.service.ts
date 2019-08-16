import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HOTEL } from 'src/app/models/HOTEL'

import { hotels } from 'src/app/hotel-mock'

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor() { }
  
  getHotels(): Observable<HOTEL[]> {
    return of(hotels);
  }
}
