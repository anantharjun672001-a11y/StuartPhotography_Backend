import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    coverImage:{
        type:String,
    },
    images:{
        type:[String],
    }
})

export default mongoose.model("Client", clientSchema);