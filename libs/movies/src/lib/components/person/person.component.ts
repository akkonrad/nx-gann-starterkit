import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from "../../types/person";
import { PersonListItem } from "../../types/person-list-item";

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent {
  @Input()
  person!: Person | PersonListItem;
}
