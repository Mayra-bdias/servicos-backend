import { Request, Response } from "express"
import { AddressInfo } from "../services/AddressInfo"

export const criarUsuario = async (req:Request, res:Response) => {
 try{
    const {email, senha, cep} = req.body
    
    const address = await AddressInfo(cep)
    if(!address){
        throw new Error("Erro no serviço")
    }
     res.send({address})

 }catch (error){
     if(error instanceof Error){
        res.send({error, message: error.message})
     }else{
         res.send({message: "Erro inesperado"})
     }
   
    }
}