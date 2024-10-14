import express from 'express'
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors";
import morgan from "morgan"; 
import routerIndex from "./router/index.js";

const server = express()

const PORT = process.env.PORT

const ready = () => console.log('Server ready in port: ' + PORT)

server.use(express.json()); // Permite trabajar con JSON
server.use(express.urlencoded({ extended: true })); // Captura consultas complejas
server.use(cors()); // Habilita CORS para orígenes cruzados
server.use(morgan('dev')); // Registra peticiones HTTP

server.use('/api', routerIndex);

server.listen(PORT, ready)

