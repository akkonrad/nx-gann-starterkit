import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from "../../types/movie";

@Component({
  selector: 'movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieInfoComponent {
  @Input()
  movie!: Movie | null;
}
