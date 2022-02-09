const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://tojina:tojina@ictakfiles.j3i0k.mongodb.net/blogDatabase?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true});

const Schema=mongoose.Schema;
var blogschema=new Schema(
    {
        // name:String,
        title:String,
        des:String,
        upvotes:Number,
        comments:[
            {
                username:String,
                text:String
            }
        ]
       
   });


var bloginfo=mongoose.model("blogs",blogschema);
module.exports=bloginfo;