// js hint esversion

const express = require("expreess");

const app = express();


app.get("/", function(req, res){
    res.send("<h1>Node Nigger</h1>")
});

app.get("/contact, function(req, res){
    res.send("Contact me at: pauldropz@gmail.com");

});


app.listen(3000, function (){
    console.log("server started on port 3000");
});