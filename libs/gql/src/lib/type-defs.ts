// type-defs.ts
import { gql } from 'apollo-server-express';

export const typeDefs = gql`

    type Person {
        name: String!
        born: Int
        actedIn: [Movie!]! @relationship(type: "ACTED_IN", properties: "ActedIn", direction: OUT)
        directed: [Movie!]! @relationship(type: "DIRECTED", direction: OUT)
        produced: [Movie!]! @relationship(type: "PRODUCED", direction: OUT)
    }

    type Movie {
        title: String!
        released: Int!
        tagline: String
        actors: [Person!]! @relationship(type: "ACTED_IN", properties: "ActedIn", direction: IN)
        directedBy: [Person!]! @relationship(type: "DIRECTED", direction: IN)
        producedBy: [Person!]! @relationship(type: "PRODUCED", direction: IN)
    }

    interface ActedIn @relationshipProperties {
        roles: [String!]
    }

`;
