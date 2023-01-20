import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MovieListItem } from "../../types/movie-list-item";
import { MovieService } from "../../services/movie.service";
import { Observable } from "rxjs";

@Component({
  selector: 'movies-list-page',
  templateUrl: './movies-list-page.component.html',
  styleUrls: ['./movies-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesListPageComponent implements OnInit {

  movies$!: Observable<MovieListItem[]>

  constructor(private service: MovieService) {
  }

  ngOnInit() {
    this.movies$ = this.service.getAllMovies();
  }
}
