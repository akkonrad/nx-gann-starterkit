import {gql} from "@apollo/client/core";

export const GET_MOVIES = gql(`
query {
  movies {
    title,
    tagline
  }
}
`);
