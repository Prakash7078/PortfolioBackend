import mongoose from 'mongoose';
const postSchema=new mongoose.Schema({
    name:{type:String,required:true},
    issue:{type:String,required:true},
    url:{type:String,unique:true},
    selectedFile:{type:String,required:true},
    skills:[String]
},{
    timestamps:true,
});
const postModel=mongoose.model('postModel',postSchema);
export default postModel;