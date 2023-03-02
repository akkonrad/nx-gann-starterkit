import {gql} from "@apollo/client/core";

export const GET_PERSON_DETAILS = gql`
  query PersonDetails($name: String) {
    people(where: {name: $name}) {
      name
      born
      actedIn{
        title
      }
      directed{
        title
      }
      produced{
        title
      }
    }
  }
`;
