const express=require("express");
const cors=require("cors");
const userdata=require("./model/user");
// const articleinfo=require("./model/blogdb");
const bloginfo=require("./model/article");
const path=require("path");


var port=process.env.PORT || 6002;

const app=express();

// const port=6002;

app.use(express.static(path.join(__dirname, './client/build')));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,'client','build','index.html'));
})
 
// add articles
app.post("/api/admin/addarticle",async (req,res)=>{

try {
    var item={
        // name:req.body.name,
        title:req.body.title,
        des:req.body.des
    }
let blogdetails=new bloginfo(item);
let result=await blogdetails.save();
res.json(result);
console.log(result);
} catch (error) {
    console.log("error");
}

})




//ftech complete articles

app.get("/api/article",async (req,res)=>{
    try{
        // const id = req.params.id;
        await bloginfo.find().then(
         (article)=>{
             res.json(article);
        }
    )
    }
    catch(err){

        res.status(500).json({message: "err"})
    }
   
})




//fetch  one article by id
app.get("/api/article/:id",(req,res)=>{
    try{
        const id = req.params.id;
        bloginfo.findOne({_id: id}).then(
         (article)=>{
             res.json(article);
        }
    )
    }
    catch(err){

        res.status(500).json({message: "err"})
    }
   
})

//delete a blog
app.post('/api/article/:id/blogdelete',(req,res)=>{
    try {
        const id = req.params.id;
       bloginfo.findOneAndDelete({_id: id})
        .then((result)=>{
    res.json(result);
  
        })

    } catch (error) {
        res.status(500).json({message: "error"})
    }
   
});


//edit blog
app.post('/api/article/:id/blogedit',(req,res)=>{
    try {
        const id = req.params.id;
        const filter = {_id:id};
        const update = {$set:req.body};
       bloginfo.findOneAndUpdate(filter,update,{new:true})
        .then((result)=>{
    res.json(result);
  console.log(result);
        })

    } catch (error) {
        res.status(500).json({message: "error"})
    }
   
});



//fetch article
// app.get("/api/article/:name",(req,res)=>{
//     try{
//         const articlename = req.params.name;
//         articleinfo.findOne({name: articlename}).then(
//          (article)=>{
//              res.json(article);
//         }
//     )
//     }
//     catch(err){

//         res.status(500).json({message: "err"})
//     }
   
// })


//upvotes

app.post("/api/article/:id/upvotes",(req,res)=>{
    const articleid=req.params.id;
    const filter = {_id:articleid};
    const update = {$inc:{upvotes:1}};
   bloginfo.findOneAndUpdate(filter,update,{new:true}).then((article)=>{
         res.json(article);
   } )

})

//comments
app.post("/api/article/:id/comments",(req,res)=>{
    const articleid=req.params.id;
          const {username,text}=req.body;
          const filter = {_id:articleid};
          const update = {$push:{comments:{username,text}}}
          bloginfo.findOneAndUpdate(filter,update,{new:true}).then((article)=>{
            res.json(article);  
})
})

// function validation(){

//     // console.log("error occured");
//     if(!item.uname && !item.email && !item.pass &&!item.cpass){
//         console.log("error occured in username");
//     }
    
// }

//signupform

app.post("/api/register",async (req,res)=>{
    
        try{
                // console.log(req.body.user);
                // if(req.body.user && req.body.em && req.body.pwd && req.body.cpwd){
                var item={
                    uname:req.body.user,
                    email:req.body.em,
                    pass:req.body.pwd,
                    cpass:req.body.cpwd
                   
                }
                
                    let user=new userdata(item);
                   
    
                    let result = await user.save();
                    console.log(result);
                    res.json({status:"success"});
            }
            
            //  }
            
        
catch(err){
    res.json({status:"err"});
}

  
})

//login authentication
app.post("/api/login",async (req,res)=>{
    try{
        var useremail=req.body.email;
        var userpass=req.body.pass;
        let result=await userdata.find({$and:[{email: useremail},{pass: userpass}]});
        console.log(result);
        // res.json({status:"successd"});
        // console.log(result);
        if(result.length>0){
            res.json({status:"success"});
        }
        else{
            res.json({status:"failed"}); 
        }
   }
   catch(err){
       res.json({status:"err"});
   }

})

//fertch registers
app.get("/api/registers",(req,res)=>{
    try{
       
        userdata.find().then(
         (user)=>{
             res.json(user);
        }
    )
    }
    catch(err){

        res.status(500).json({message: "err"})
    }
   
})


app.listen(port,()=>{
console.log("server running on port "+port);
})

