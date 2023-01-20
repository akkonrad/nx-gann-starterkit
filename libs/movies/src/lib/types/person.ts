import { MovieListItem } from "./movie";

export interface Person {
  name: string;
  born?: number;
  actedIn: MovieListItem[];
  directed: MovieListItem[];
  produced: MovieListItem[];
}
