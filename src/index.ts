import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {criarUsuario } from './endpoints/criarusuario'

dotenv.config()

export const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log("Server is ruuning at port", process.env.PORT || 3003) 
})

app.post("/users", criarUsuario)