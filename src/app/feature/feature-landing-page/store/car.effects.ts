import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CarActions from './car.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CarService } from '../services/car.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarEffects {
  getCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarActions.getCars),
      switchMap(() => this.carService.getCars()),
      map(cars => cars.sort((preCar, nextCar) => preCar.brand.localeCompare( nextCar.brand))),
      map((cars) => CarActions.getCarsSuccessful({cars})),
      catchError((error) => of(CarActions.getCarsFailed({error: error.message}))),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly carService: CarService,
  ) {
  }
}
