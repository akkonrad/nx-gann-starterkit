import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MovieListItem } from "../../types/movie-list-item";
import { MovieService } from "../../services/movie.service";
import { Observable } from "rxjs";

@Component({
  selector: 'movies-list-page',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesListPage implements OnInit {

  movies$!: Observable<MovieListItem[]>

  loading: boolean = false;

  posts: any;

  constructor(private service: MovieService) {
  }

  ngOnInit() {
    this.movies$ = this.service.getAllMovies();
  }

  ngOnDestroy() {
  }
}
