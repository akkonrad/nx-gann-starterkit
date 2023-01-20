import { Route } from '@angular/router';
import { MoviesListPage } from "./pages/movies-list/movies-list.page";
import { MoviesMoviePage } from "./pages/movies-page/movies-movie.page";
import { MoviesPersonPage } from "./pages/movies-person/movies-person.page";
import { MoviesLayoutPage } from "./pages/movies-layout/movies-layout.page";

export const moviesRoutes: Route[] = [
  {
    path: '',
    component: MoviesLayoutPage,
    children: [
      {path: '', component: MoviesListPage},
      {path: 'movie/:title', component: MoviesMoviePage},
      {path: 'person/:name', component: MoviesPersonPage}
    ]
  }

];
