import { Movie } from "./movie";

export type MovieListItem = Pick<Movie, 'title' | 'tagline'>;

