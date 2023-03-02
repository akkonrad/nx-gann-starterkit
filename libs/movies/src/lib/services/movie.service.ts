import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {MovieListItem} from "../types/movie-list-item";
import {Movie} from "../types/movie";
import {Apollo} from "apollo-angular";
import {GET_MOVIES, GET_PERSON_DETAILS, GET_MOVIE_DETAILS} from "../queries";
import {Person} from "../types/person";

@Injectable({providedIn: "root"})
export class MovieService {

  constructor(private readonly apollo: Apollo) {
  }

  getAllMovies(): Observable<MovieListItem[]> {
    return this.apollo
      .watchQuery<any>({
        query: GET_MOVIES,
      })
      .valueChanges.pipe(
        map(response => {
          const {data, loading} = response;
          return data.movies;
        })
      );

  }

  getMovieByTitle(title: string): Observable<Movie> {
    return this.apollo
      .watchQuery<any>({
        query: GET_MOVIE_DETAILS,
        variables: {
          title: title
        }
      })
      .valueChanges.pipe(
        map(response => {
          const {data} = response;
          return data.movies[0];
        }),
        map(this.actorsMapper)
      );
  }

  getPersonByName(name: string): Observable<Person> {
    return this.apollo
      .watchQuery<any>({
        query: GET_PERSON_DETAILS,
        variables: {
          name: name
        },
      })
      .valueChanges.pipe(
        map(response => {
          const {data} = response;
          return data.people[0];
        }),
      );
  }

  private actorsMapper(data: any) {
    return {
      ...data, actors: data.actorsConnection.edges.map((item: any) => {
        return {
          name: item.node.name,
          roles: item.roles
        }
      })
    };
  }

}
