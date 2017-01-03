const express = require('express'),
    http = require('http');

const app = express();
const server = http.createServer(app);


app.get('/',(req, res) => {
    res.send('Hello world from Distelli & Docker!');
});

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server is started on: ${server.address().port}`);
});
