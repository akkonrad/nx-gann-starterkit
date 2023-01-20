import { Route } from '@angular/router';
import { MoviesListPageComponent } from "./pages/movies-list/movies-list-page.component";
import { MoviesMoviePageComponent } from "./pages/movies-page/movies-movie-page.component";
import { MoviesPersonPageComponent } from "./pages/movies-person/movies-person-page.component";
import { MoviesLayoutPageComponent } from "./pages/movies-layout/movies-layout-page.component";

export const moviesRoutes: Route[] = [
  {
    path: '',
    component: MoviesLayoutPageComponent,
    children: [
      {path: '', component: MoviesListPageComponent},
      {path: 'movie/:title', component: MoviesMoviePageComponent},
      {path: 'person/:name', component: MoviesPersonPageComponent}
    ]
  }

];
