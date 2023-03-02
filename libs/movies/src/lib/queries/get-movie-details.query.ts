import {gql} from "@apollo/client/core";

export const GET_MOVIE_DETAILS = gql`
  query MovieDetails($title: String) {
    movies(where: {title: $title}) {
      title
      tagline
      released

      directedBy {
        name
        born
      }

      producedBy {
        name
        born
      }

      actorsConnection {
        edges {
          node {
            name
          }
          roles
        }
      }
    }
  }
`;
