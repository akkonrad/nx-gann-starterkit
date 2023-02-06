import { Route } from '@angular/router';
import { MoviesListPage } from "./pages/movies-list/movies-list.page";
import { MoviesLayoutComponent } from "./components/movies-layout.component";
import { MoviesMoviePage } from "./pages/movies-page/movies-movie.page";
import { MoviesPersonPage } from "./pages/movies-person/movies-person.page";

export const moviesRoutes: Route[] = [
  {
    path: '',
    component: MoviesLayoutComponent,
    children: [
      {path: '', component: MoviesListPage},
      {path: 'movie/:title', component: MoviesMoviePage},
      {path: 'person/:name', component: MoviesPersonPage}
    ]
  }

];
