const {createServer} = require('http');

const server = createServer((req,res)=>{
    res.end('Thank you');
});

server.listen(5000);