const express = require ("express");
const pppath = require ("path");


const app = express ();

app.get ("/", (req, res) => {
    res.sendFile(path.join(_dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;




app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );
