const mongoose=require("mongoose");


//  mongoose.connect("mongodb+srv://tojina:tojina@ictakfiles.j3i0k.mongodb.net/blogDatabase?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false});
//  mongoose.connect("mongodb+srv://tojina:tojina@ictakfiles.j3i0k.mongodb.net/blogDatabase?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true});
const Schema=mongoose.Schema;
const userschema=new Schema(
    {
        uname:String,
        email:String,
        pass:String,
        cpass:String

   })


const userdata=mongoose.model("users",userschema);
module.exports=userdata;