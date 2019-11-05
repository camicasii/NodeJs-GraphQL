import mongoose from "mongoose";
export async function connect(){
           try{
               await mongoose.connect("mongodb://localhost/mongodbgraphql",{
                useNewUrlParser:true,
                useUnifiedTopology:true
            });
            console.log(">>>>DB is connected");
        }
        catch{
            console.log('something goes wrong!');
            console.log(e);
        }
}