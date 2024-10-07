import { Routes } from '@angular/router';
import { CarDetailComponent } from '../car-detail/car-detail.component';

export const carRoutes: Routes = [
  {
    path: 'car-detail/:carId',
    component: CarDetailComponent,
  },
];
