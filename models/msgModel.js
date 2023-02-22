import mongoose from 'mongoose';
const msgSchema=new mongoose.Schema(
    {
        //parameters into product table
        name:{type:String,required:true},
        phone:{type:Number,required:true,unique:true},
        text:{type:String,required:true},
       
    },{
        timestamps:true,
    }
);
const msg=mongoose.model('msg',msgSchema);//Product is name of table into db
export default msg;