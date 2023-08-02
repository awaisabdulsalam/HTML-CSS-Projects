const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello Awais, Welcome to Node World!");
        res.end();
    } else if (req.url === "/form") {
        res.setHeader("Content-Type", "text/html");
        res.write("<form action='/submit' method='POST'><input name='data' /> <button>Submit</button></form>");
        res.end();
    } else if (req.url === "/submit"){

        //*  Now we have received data in user's input data in "req" from ABOVE block
        //*  we can use here that input data

        //? In Node we receive data(input) in chunks we've to use it clearly
        let data = "";

        //?  Whenever data will be received "req.on()" will be called 
        req.on("data", chunk => data += chunk);

        req.write("Data Received");
        res.end();

    } 
    else {
        res.write("404 - Not Found");
        res.end();
    }
});

server.listen(3000)
