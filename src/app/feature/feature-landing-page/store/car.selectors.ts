import { CAR_FEATURE_KEY, cartAdapter } from './car.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarState } from './car.state';


export const getCarState = createFeatureSelector<CarState>(CAR_FEATURE_KEY);
const { selectAll, selectTotal } = cartAdapter.getSelectors();

export const selectAllCars = selectAll;
export const getSelectedCar = (state: CarState) => state.selectedCar;
export const getFilterCarByBrand = (state: CarState) => state.filterCarByBrand;
