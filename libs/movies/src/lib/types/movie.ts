import { PersonListItem } from "./person-list-item";
import { Actor } from "./actor";

export interface Movie {
  title: string;
  tagline?: string;
  released: number;
  actors: Actor[];
  directedBy: PersonListItem[];
  producedBy: PersonListItem[];
}
