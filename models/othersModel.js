import mongoose from 'mongoose';
const products=new mongoose.Schema({
    image:{type:String,required:true},
    desc:{type:String,required:true},
},{
    timestamps:true,
});
const Others=mongoose.model('Others',products);
export default Others;