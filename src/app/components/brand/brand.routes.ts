import { Routes } from '@angular/router';
import { AddBrandComponent } from '../add-brand/add-brand.component';
import { loginGuard } from '../../guards/login.guard';

export const brandRoutes: Routes = [
  {
    path: 'brands/add',
    component: AddBrandComponent,
    canActivate: [loginGuard]
  },
];
