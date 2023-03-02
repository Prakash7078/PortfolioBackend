import mongoose from 'mongoose';
const memorySchema=new mongoose.Schema({
    name:{type:String,required:true},
    ima:{type:String},
    des:{type:String,required:true}
},{
    timestamps:true,
})
const memory=mongoose.model("Memory",memorySchema);
export default memory;