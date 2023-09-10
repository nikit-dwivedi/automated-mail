const http = require('http')
const app = require('./app');
require("dotenv").config()


const server = http.createServer(app)

const port = process.env.PORT
const host = process.env.HOST


server.listen(port, host, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server listening on ${host}:${port}`);
    }
})