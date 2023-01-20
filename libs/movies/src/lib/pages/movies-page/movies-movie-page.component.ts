import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Movie } from "../../types/movie";
import { Observable } from "rxjs";
import { MovieService } from "../../services/movie.service";

@Component({
  selector: 'movies-page',
  templateUrl: './movies-movie-page.component.html',
  styleUrls: ['./movies-movie-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesMoviePageComponent implements OnInit {

  title: string = '-';
  movie$!: Observable<Movie> | null;

  constructor(private route: ActivatedRoute,
              private service: MovieService) {
  }

  ngOnInit() {
    this.title = this.route.snapshot.params['title'];
    if (this.title)
      this.movie$ = this.service.getMovieByTitle(this.title);
  }
}
