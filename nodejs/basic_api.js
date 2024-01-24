// http module is imported
const http = require("http");

// our own module is imported
const data = require("./data");

// http createServer takes a function [call back function] which has two paramters response and request
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" }); // response code [200 standard]
    response.write(JSON.stringify(data));
    response.end();
  })
  .listen(4200);
