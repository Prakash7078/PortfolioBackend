import mongoose from 'mongoose';
const memorySchema=new mongoose.Schema({
    name:{type:String,required:true},
    des:{type:String,required:true}
},{
    timestamps:true,
})
const memory=mongoose.model("Memory",memorySchema);
export default memory;