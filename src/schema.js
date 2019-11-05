import {makeExecutableSchema  } from "graphql-tools";
import {resolve} from "./resolve"

//se debe colocar al menos una consulta de lo contrario express da error
const typeDefs =`
type Query {
    hello:String
    greet(name:String!):String
    tasks:[Task]
}
type Task{
    _id:ID,
    title:String!,
    description:String,
    number:Int!
}
type Mutation{
    createTask(input:TaskInput):Task
}
input TaskInput{    
    title:String!,
    description:String!,
    number:Int
}
`;
/**
 * nota que name:String! es para que la variable sea obligatoria de lo
 * contrario dara error
 * *******************************************************
 * en el caso de Task la opcion ! hace que si quieres el dato debes pedirlo 
 * de lo contrario se mostrara como consulta por defecto
 ****************************
 * nota agregamos input a una de las entradas esto parte de la sintaxi de graphQL
 * requerida para crear input para las mutaciones
 */

export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolve
});

/**
 * consultas mutaciones 
 * mutation{
  createTask(input:{
    title:"Tasasfasf"
    description:"adfasderwrfwa"
    number:125
  }){
    _id
    title
    description
    number    
  }
}
 */