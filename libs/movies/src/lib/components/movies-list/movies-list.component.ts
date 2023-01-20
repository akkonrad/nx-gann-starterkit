import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MovieListItem } from "../../types/movie-list-item";

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesListComponent {
  @Input()
  movies: (MovieListItem[] | null) = [];

}
