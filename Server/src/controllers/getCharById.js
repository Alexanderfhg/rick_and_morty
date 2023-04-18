const axios = require('axios');

function getCharById(res, id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(resp => resp.data)
        .then(data => {
            let character = {
                id: id, 
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                status: data.status
            }
            res
            .writeHead(200, {"Content-Type": "application/json"})
            .end(JSON.stringify(character));
        })
        .catch(err => {
            res
            .writeHead(500, { "Content-Type": "text/plain" })
            end(new Error(err));
        })
}

module.exports = getCharById;