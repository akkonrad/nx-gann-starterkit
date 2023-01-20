import { Route } from '@angular/router';
import { moviesRoutes } from "movies";

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    children: moviesRoutes
  }
];
