import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { moviesRoutes } from './lib.routes';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviePersonComponent } from './components/movie-person/movie-person.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { ActorComponent } from './components/actor/actor.component';
import { MoviesLayoutComponent } from "./components/movies-layout.component";
import { MoviesPersonPage } from "./pages/movies-person/movies-person.page";
import { MoviesMoviePage } from "./pages/movies-page/movies-movie.page";
import { MoviesListPage } from "./pages/movies-list/movies-list.page";
import { PersonComponent } from "./components/person/person.component";
import { ListItemComponent } from "./components/list-item/list-item.component";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(moviesRoutes)],
  declarations: [
    MoviesListPage,
    MoviesMoviePage,
    MoviesPersonPage,
    MoviesListComponent,
    MoviePersonComponent,
    MovieInfoComponent,
    MoviesLayoutComponent,
    PersonComponent,
    ActorComponent,
    ListItemComponent,
  ],
  exports: [MoviesListPage, MoviesMoviePage, MoviesPersonPage],
})
export class MoviesModule {
}
