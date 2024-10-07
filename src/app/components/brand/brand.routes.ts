import { Routes } from '@angular/router';
import { AddBrandComponent } from '../add-brand/add-brand.component';

export const brandRoutes: Routes = [
  {
    path: 'brands/add',
    component: AddBrandComponent,
  },
];
