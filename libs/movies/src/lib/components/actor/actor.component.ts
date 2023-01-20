import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Actor } from "../../types/actor";

@Component({
  selector: 'actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorComponent {
  @Input()
  actor!: Actor;

  get roles() {
    return this.actor.roles.join(', ');
  }
}
