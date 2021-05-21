var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");
const User = require("./models/user");
const {sendEnquiryEmail} =  require("./emails/account");

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL , {useNewUrlParser : true ,
                                useUnifiedTopology: true});


const port = process.env.PORT;


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/",  (req , res)=>{
    res.render("index");
});

app.get("/Thankyou", (req, res)=>{
    res.render("thankyou");
})

app.post("/users" , (req, res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;
    const newUser = {name, email, subject, message};
    console.log(newUser);
    User.create(newUser , (err , newUser)=>{
        if(err){
            console.log(err);
        }
        else{
            sendEnquiryEmail(name , email, subject, message);
            res.redirect('/Thankyou')
        }
    });
});



app.listen(port, function(){
   console.log("The Website Server has Started on Port" , port);
});