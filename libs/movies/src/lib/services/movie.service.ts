import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MovieListItem } from "../types/movie-list-item";
import { Movie } from "../types/movie";

@Injectable({providedIn: "root"})
export class MovieService {

  getAllMovies(): Observable<MovieListItem[]> {
    return of([
      {
        "title": "The Matrix",
        "tagline": "Welcome to the Real World",
      },
      {
        "title": "The Matrix Reloaded",
        "tagline": "Free your mind",
      },
    ]);
  }

  getMovieByTitle(title: string): Observable<Movie> {
    return of({
      "title": "The Matrix",
      "tagline": "Welcome to the Real World",
      "released": 1999,
      "directedBy": [
        {
          "name": "Lana Wachowski",
          "born": 1965
        },
        {
          "name": "Lilly Wachowski",
          "born": 1967
        }
      ],
      "producedBy": [
        {
          "name": "Joel Silver",
          "born": 1952
        }
      ],
      "actors": [
        {
          "name": "Emil Eifrem",
          "roles": [
            "Emil"
          ]
        },
        {
          "name": "Hugo Weaving",
          "roles": [
            "Agent Smith"
          ]
        },
        {
          "name": "Laurence Fishburne",
          "roles": [
            "Morpheus"
          ]
        },
        {
          "name": "Carrie-Anne Moss",
          "roles": [
            "Trinity"
          ]
        },
        {
          "name": "Keanu Reeves",
          "roles": [
            "Neo"
          ]
        }
      ]
    });
  }

  getPersonByName(name: string) {
    return of(
      {
        "name": "Tom Hanks",
        "actedIn": [
          {
            "title": "Apollo 13",
            "released": 1995
          },
          {
            "title": "You've Got Mail",
            "released": 1998
          },
          {
            "title": "A League of Their Own",
            "released": 1992
          },
          {
            "title": "Joe Versus the Volcano",
            "released": 1990
          },
          {
            "title": "That Thing You Do",
            "released": 1996
          },
          {
            "title": "The Da Vinci Code",
            "released": 2006
          },
          {
            "title": "Cloud Atlas",
            "released": 2012
          },
          {
            "title": "Cast Away",
            "released": 2000
          },
          {
            "title": "The Green Mile",
            "released": 1999
          },
          {
            "title": "Sleepless in Seattle",
            "released": 1993
          },
          {
            "title": "The Polar Express",
            "released": 2004
          },
          {
            "title": "Charlie Wilson's War",
            "released": 2007
          }
        ],
        "directed": [
          {
            "title": "That Thing You Do",
            "released": 1996
          }
        ],
        "produced": []
      })
  }
}
