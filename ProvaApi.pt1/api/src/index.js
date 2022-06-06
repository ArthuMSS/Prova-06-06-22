 import 'dotenv/config'

 import nmpetController from './controller/nmpetController.js';

 import express from 'express'
 import cors from 'cors'

 const server = express ();
 server.use(cors());
 server.use(express.json());

 server.use(nmpetController);


 server.listen(process.env.PORT,
                () => console.log (`Api esta online na porta ${process.env.PORT}`));