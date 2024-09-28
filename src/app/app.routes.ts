import { Routes } from '@angular/router';
import { homepageRoutes } from './components/home-page/homepages.routes';
import { carRoutes } from './components/car/car.routes';

export const routes: Routes = [
    ...homepageRoutes,
    ...carRoutes
];
