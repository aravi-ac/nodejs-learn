const http = require("http");

const hostname = "127.0.0.1";
const port = 2000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "plain/text");
  res.end("hello world");
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
