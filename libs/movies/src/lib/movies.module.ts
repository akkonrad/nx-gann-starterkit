import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { moviesRoutes } from './lib.routes';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviePersonComponent } from './components/movie-person/movie-person.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { PersonListItemComponent } from './components/person/person-list-item.component';
import { ActorComponent } from './components/actor/actor.component';
import { MoviesLayoutPage } from './pages/movies-layout/movies-layout.page';
import { MoviesListPage } from './pages/movies-list/movies-list.page';
import { MoviesMoviePage } from './pages/movies-page/movies-movie.page';
import { MoviesPersonPage } from './pages/movies-person/movies-person.page';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(moviesRoutes)],
  declarations: [
    MoviesListPage,
    MoviesMoviePage,
    MoviesPersonPage,
    MoviesListComponent,
    MoviePersonComponent,
    MovieInfoComponent,
    MoviesLayoutPage,
    PersonListItemComponent,
    ActorComponent,
    ListItemComponent,
  ],
  exports: [MoviesListPage, MoviesMoviePage, MoviesPersonPage],
})
export class MoviesModule {}
