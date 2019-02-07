const app = require('./app');
const http = require('http');
const server = http.createServer(app);
server.listen(3000, () => {
    console.log('server started at 3000');
});
