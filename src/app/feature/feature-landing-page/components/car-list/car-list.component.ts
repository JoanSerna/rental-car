import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Car } from '../../models/car';
import { CarFacadeService } from '../../store/car.facade.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarListComponent implements OnInit {
  public cars$: Observable<Car[]>

  constructor(
    private readonly carFacadeService: CarFacadeService,
  ) {
    this.cars$ = this.carFacadeService.filterCarByBrand$.pipe(
     switchMap(brand => this.carFacadeService.cars$.pipe(
       map(cars => brand ? cars.filter(car => car.brand.toLowerCase().includes(brand.toLowerCase())) : cars),
     ))
    )
  }

  ngOnInit(): void {
  }

}
