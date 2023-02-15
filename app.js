var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser")





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


app.listen(port, function(){
   console.log("The Website Server has Started on Port" , port);
});