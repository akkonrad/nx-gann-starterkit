import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { moviesRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(moviesRoutes)],
})
export class MoviesModule {}
