const http = require('http');
// const data = require('./utils/data');
const getCharById = require('./controllers/getCharById')
const PORT = 3001;


http
    .createServer((req, res) => {   
        console.log("Ingresando al server")     
        res.setHeader('Access-Control-Allow-Origin', '*');        
        if (req.url.slice(0, 23) === "/rickandmorty/character") {
            console.log(req.url.slice(0, 23))
            const id = parseInt(req.url.slice(24, req.url.length));
            console.log("id => " + id)
            getCharById(res, id)
        //     if (id > 0 && id < 6) {
        //         const character = data[id - 1];
        //         res.writeHead(200, { "Content-Type": "application/json" });
        //         res.end(JSON.stringify(character));
        //     } else {                
        //         res.end(JSON.stringify({error: 404}));                
        //     }
        }
    })
    .listen(PORT, "localhost");