// 部署在自己的主機上版本

const http = require('http');
const ipv4Regex = /^::ffff:(\d+\.\d+\.\d+\.\d+)$/;

const server = http.createServer((req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const ipv4Match = ipv4Regex.exec(ip);
  const ipv4 = ipv4Match ? ipv4Match[1] : ip;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(ipv4);
});

// 唯一需要設定的地方，預設端口為 80
server.listen(80, () => {
  console.log('伺服器啟動完畢');
});