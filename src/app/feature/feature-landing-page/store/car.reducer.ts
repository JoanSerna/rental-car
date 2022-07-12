import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as CarActions from './car.actions';
import { Car } from '../models/car';
import { CarState } from './car.state';

export const CAR_FEATURE_KEY = 'car';
export const cartAdapter: EntityAdapter<Car> =
  createEntityAdapter<Car>({
    selectId: (car: Car) => car.id,
  });
export const initialState: CarState = cartAdapter.getInitialState({
  selectedCar: null,
  filterCarByBrand: null,
});
export const carReducer = createReducer(
  initialState,
  on(CarActions.getCarsSuccessful, (state, {cars}) => {
    return cartAdapter.addMany(cars, state);
  }),
  on(CarActions.searchCarsByBrand, (state, {brand}) => {
    return {
      ...state,
      filterCarByBrand: brand,
    }
  }),
);
