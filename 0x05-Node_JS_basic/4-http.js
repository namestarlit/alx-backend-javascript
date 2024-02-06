const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  const body = 'Hello Holberton School!';

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.end(body);
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
