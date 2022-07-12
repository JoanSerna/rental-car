import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import { getCars, searchCarsByBrand } from './car.actions';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import {
  getCarState,
  getFilterCarByBrand,
  selectAllCars,
} from './car.selectors';

@Injectable({
  providedIn: 'root',
})
export class CarFacadeService {
  public cars$: Observable<Car[]>;
  public filterCarByBrand$: Observable<string | null>;

  constructor(
    private readonly store: Store<AppState>,
  ) {
    this.cars$ = this.store.pipe(
      select(getCarState),
      select(selectAllCars),
    )
    this.filterCarByBrand$ = this.store.pipe(
      select(getCarState),
      select(getFilterCarByBrand),
    )
  }

  public getCars(): void {
    this.store.dispatch(getCars());
  }
  public searchCarsByBrand(brand:string): void {
    this.store.dispatch(searchCarsByBrand({brand}));
  }
}
