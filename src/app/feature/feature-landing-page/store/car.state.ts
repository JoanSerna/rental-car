import { EntityState } from "@ngrx/entity";
import { Car } from '../models/car';

export interface CarState extends EntityState<Car> {
  selectedCar: Car | null;
  filterCarByBrand: string | null;
}
