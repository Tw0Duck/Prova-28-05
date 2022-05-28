import { Router } from 'express'
import{ semafaro, semana} from './service.js'
const server = Router();


server.get('/semafaro/:cor', (req,resp)=>{
    const x = req.params.cor;
    const z= semafaro(x)
    resp.send({
        semafaro:z
    });
})

server.get('/semana/:dia',(req,resp)=>{
    const x = req.params.dia;
    const z = semana(x);
    resp.send({
        semana:z
    })
})


export default server