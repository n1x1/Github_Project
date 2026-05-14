const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('App version: ' + process.env.APP_VERSION || '1.0.0');
});

server.listen(3001, () => console.log('Running on port 3001'));
