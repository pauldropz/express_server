const express = require("express");

const app = express();



//             // For getting
// app.get();
//             // For creating
// app.post();
//                 // For updating
// app.post();
//                 // /for deliting
// app.delete();


app.get("/", (req, res) => {
     res.send("Moorning World");
});

app.listen(3000, () => {
          
})  