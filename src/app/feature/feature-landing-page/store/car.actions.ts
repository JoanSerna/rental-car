import { createAction, props } from '@ngrx/store';
import { Car } from '../models/car';

export const getCars = createAction(
  '[Car Actions] get cars',
);
export const getCarsSuccessful = createAction(
  '[Car Actions] get cars successful',
  props<{ cars: Car[] }>(),
);
export const getCarsFailed = createAction(
  '[Car Actions] get cars failed',
  props<{ error: string }>(),
);
export const searchCarsByBrand = createAction(
  '[Car Actions] search cars by brand',
  props<{ brand: string }>(),
);
