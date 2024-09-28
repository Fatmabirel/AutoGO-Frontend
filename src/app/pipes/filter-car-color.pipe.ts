import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilterCarColor',
  standalone: true,
})
export class FilterCarColorPipe implements PipeTransform {

  transform(cars: any[], colorName: string): any[] {
    if (!cars || !colorName) {
      return cars;
    }
    return cars.filter(car =>
      car.colorName === colorName
    );
  }

}
