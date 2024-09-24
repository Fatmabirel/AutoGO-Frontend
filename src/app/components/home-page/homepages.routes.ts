import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { FaqComponent } from '../faq/faq.component';
import { ContactComponent } from '../contact/contact.component';
import { BrandComponent } from '../brand/brand.component';
import { CarComponent } from '../car/car.component';

export const homepageRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'brands',
    component: BrandComponent,
  },
  {
    path: 'cars',
    component: CarComponent,
  },
];
