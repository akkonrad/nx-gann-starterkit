import { Person } from "./person";

export type PersonListItem = Pick<Person, 'name' | 'born'>
