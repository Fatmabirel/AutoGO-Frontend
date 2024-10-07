import { Routes } from '@angular/router';
import { homepageRoutes } from './components/home-page/homepages.routes';
import { carRoutes } from './components/car/car.routes';
import { brandRoutes } from './components/brand/brand.routes';

export const routes: Routes = [
    ...homepageRoutes,
    ...carRoutes,
    ...brandRoutes
];
