import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { moviesRoutes } from './lib.routes';
import { MoviesListPageComponent } from './pages/movies-list/movies-list-page.component';
import { MoviesMoviePageComponent } from './pages/movies-page/movies-movie-page.component';
import { MoviesPersonPageComponent } from './pages/movies-person/movies-person-page.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviePersonComponent } from './components/movie-person/movie-person.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MoviesLayoutPageComponent } from './pages/movies-layout/movies-layout-page.component';
import { PersonComponent } from './components/person/person.component';
import { ActorComponent } from './components/actor/actor.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(moviesRoutes)],
  declarations: [
    MoviesListPageComponent,
    MoviesMoviePageComponent,
    MoviesPersonPageComponent,
    MoviesListComponent,
    MoviePersonComponent,
    MovieInfoComponent,
    MoviesLayoutPageComponent,
    PersonComponent,
    ActorComponent,
  ],
  exports: [
    MoviesListPageComponent,
    MoviesMoviePageComponent,
    MoviesPersonPageComponent,
  ],
})
export class MoviesModule {}
