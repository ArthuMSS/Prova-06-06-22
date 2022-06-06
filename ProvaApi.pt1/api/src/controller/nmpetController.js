import { Name } from '../repository/nmpetRepository.js'

import { Router } from 'express';
const server = Router();

server.get('/pet/:nome', (req, resp) => {
    try{
        let nome = req.params.nome;

        resp.send({
            nome:nome
        })
    } catch(err){
        resp.status(404).send({
         erro: 'nome inválido ou inexistente'
        })
    }

})

export default server;