import { task } from "./sample";
import { log } from "util";
export const  resolve ={
    Query:{
        hello:()=>{
            return "Hello wold with GraphQL";
        },
        greet(root, { name },context){            
            console.log(context);
            
            return `Hello ${name}!`;
        },
        tasks(){
            return task;
        }

    },
    Mutation:{        
        createTask(_,{input}){
            input._id =task.length;
            task.push(input);
            return input;
            

        }
    }

};
/**
podemos usar args en la funcion grreet 
     greet(root, args){
            //console.log(args.name);
            return `Hello ${args.name}`;}
    o destructurin

*/