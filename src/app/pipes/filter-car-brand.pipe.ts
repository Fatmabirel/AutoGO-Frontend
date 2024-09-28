import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilterCarBrand',
  standalone: true,
})
export class FilterCarBrandPipe implements PipeTransform {

  transform(cars: any[], brandName: string): any[] {
    if (!cars || !brandName) {
      return cars;
    }
    return cars.filter(car =>
      car.brandName === brandName
    );
  }

}
