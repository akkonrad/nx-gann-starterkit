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
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(moviesRoutes), ApolloModule, HttpClientModule],
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
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:3333/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class MoviesModule {
}
