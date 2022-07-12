import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }


  public getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>('assets/data/cars.json');
  }
}
