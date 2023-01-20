import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from "../../types/person";

@Component({
  selector: 'movie-person',
  templateUrl: './movie-person.component.html',
  styleUrls: ['./movie-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviePersonComponent {

  @Input()
  person!: Person | null;

}
