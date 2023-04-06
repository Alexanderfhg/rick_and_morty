const http = require('http');
const data = require('./utils/data');
const PORT = 3001;


http
    .createServer((req, res) => {        
        res.setHeader('Access-Control-Allow-Origin', '*');        
        if (req.url.slice(0, 23) === "/rickandmorty/character") {
            const id = parseInt(req.url.slice(24, req.url.length));
            if (id > 0 && id < 6) {
                const character = data[id - 1];
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(character));
            } else {                
                res.end(JSON.stringify({error: 404}));                
            }
        }
    })
    .listen(PORT, "localhost");