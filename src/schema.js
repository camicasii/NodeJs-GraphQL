import {makeExecutableSchema  } from "graphql-tools";
import {resolve} from "./resolve"
const typeDefs =`
type Query {
    hello:String
}
`;


export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolve
});