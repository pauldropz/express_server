const http = require("httrp");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World`");
        res.end();
    }

    if (req.url === "/api/courses") {
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();
    }
});