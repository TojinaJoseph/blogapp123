const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost:27017/blog-app");

const Schema=mongoose.Schema;
var articleschema=new Schema(
    {
        name:String,
        username:String,
        upvotes:Number,
        comments:Array
   });


var articleinfo=mongoose.model("articles",articleschema);
module.exports=articleinfo;