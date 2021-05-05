const express = require("express");
const app = express()
const server = require('http').createServer(app);

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('asd')
})

server.listen(port, () => console.log(`listening on ${port}`));