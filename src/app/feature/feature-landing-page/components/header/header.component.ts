import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs';
import { CarFacadeService } from '../../store/car.facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public formSearchCar: FormGroup | undefined;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly carFacadeService: CarFacadeService,
  ) {
  }

  public ngOnInit(): void {
    this.loadInitialData();
    this.listenerFormValues()
  }

  private loadInitialData(): void {
    this.formSearchCar = this.formBuilder.group({
      brand: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
    })
  }

  private listenerFormValues(): void {
    this.formSearchCar?.get('brand')?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap(this.resetCarList.bind(this)),
      filter(brand => brand.length > 2),
    ).subscribe(brand => {
      this.carFacadeService.searchCarsByBrand(brand)
    })
  }

  private resetCarList(brand:string) :void{
    if(!brand){
      this.carFacadeService.searchCarsByBrand('')
    }
  }
}
