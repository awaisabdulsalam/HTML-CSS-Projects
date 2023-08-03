const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "data.txt");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Awais, Welcome to Node World!");
    //? Its Necessary to end every request with "req.end()"
    res.end();
  } else if (req.url === "/form") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<form action='/submit' method='POST'><input name='data' /><input name='data2' /> <button>Submit</button></form>"
    );
    res.end();
  } else if (req.url === "/submit") {
    //     //*  Now we have received data of user's input data in "req" from ABOVE block
    //     //*  we can use here that input data

    //     //? In Node we receive data(input) in chunks we've to use it carefully
    let data = "";

    //     //?  Whenever data will be received "req.on()" will be called

    //     //*    "data" ka kaam jaise user's data aye wo la k de
    req.on("data", (chunk) => (data += chunk));

    //     //*    "end" ka kaam inform kre k sara data receive ho chuky
    req.on("end", () => {
      fs.readFile(filePath, "utf-8", (err, fileData) => {
        const newData = fileData + "\n" + data;
        console.log(data);
        // //? After
        fs.writeFile(filePath, newData, () => {
          res.write("Data Received");
          res.end();
        });
      });
      // //?  Before
      // fs.writeFile(filePath, data, () => {
      //     res.write("Data Received");
      //     res.end();
      // });
    });
  } else {
    res.write("404 - Not Found");
    res.end();
  }
});

server.listen(3000);
