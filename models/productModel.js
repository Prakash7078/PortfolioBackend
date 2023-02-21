import mongoose from 'mongoose';
const products=new mongoose.Schema({
    image:{type:String,required:true},
    desc:{type:String,required:true},
},{
    timestamps:true,
});
const Product=mongoose.model('Product',products);
export default Product;