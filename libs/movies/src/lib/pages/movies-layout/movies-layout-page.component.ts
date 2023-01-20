import { Component } from '@angular/core';

@Component({
  selector: 'movies-layout',
  template: `<h1>
      <a [routerLink]="['']">🎥 Movies</a>
  </h1>
  <div>
      <router-outlet></router-outlet>
  </div>`,
  styles: [],
})
export class MoviesLayoutPageComponent {
}
