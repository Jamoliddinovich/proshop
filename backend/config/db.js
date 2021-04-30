import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
const connect = async()=>{
    try{
        const conn = await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.9x7bo.mongodb.net/proshop?retryWrites=true&w=majority`,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        console.log("Successfully connected to database on port " + conn.connections[0].port)
    }catch(err){
throw new Error(err.message)
    }

}
 
export default connect;