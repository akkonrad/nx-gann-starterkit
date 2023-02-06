import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import { Person } from "../../types/person";
import { Observable } from "rxjs";

@Component({
  selector: 'movies-person',
  templateUrl: './movies-person.page.html',
  styleUrls: ['./movies-person.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesPersonPage {

  name!: Person['name'];
  person$!: Observable<Person>;

  constructor(private route: ActivatedRoute,
              private service: MovieService) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    if (this.name)
      this.person$ = this.service.getPersonByName(this.name);
  }
}
