import { Movie } from "./movie";

export type MovieListItem = Pick<Movie, 'title' | 'released'> | Pick<Movie, 'title' | 'tagline'>;
