const http = require('http')
const https = require('https')
var fs = require('fs');
const app = require('./app');
require("dotenv").config()


var privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

let credentials = { key: privateKey, cert: certificate };

const server = http.createServer(app)
const secureServer = https.createServer(credentials, app);

const port = process.env.PORT
const sPort = process.env.SPORT

secureServer.listen(sPort, () => {
    console.log(`Secure server listening at ${sPort}`);
})
server.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server listening on ${port}`);
    }
})