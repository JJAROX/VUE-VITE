import cars from "./data/cars_full.json" assert { type: "json" };
import { createServer } from "http";
import { read, readFile } from "fs";
const PORT = 3000;

const server = createServer((req, res) => {
  console.log(req.method)
  console.log(cars);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PATCH, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'GET' && req.url == '/api/cars') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(cars));
    return;
  }


})

server.listen(PORT, () => {
  console.log(`serwer startuje na porcie ${PORT}`)
});