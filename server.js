// js hint esversion

const express = require("expreess");


app.get("/", function(request, response){
    console.log(request);
})
const app = express();


app.listen(3000, function (){
    console.log("server started on port 3000")
} );