import axios from "axios"
import { Address } from "../types/Address"

const baseURL = "https://viacep.com.br/ws"

export const AddressInfo = async (cep:string): Promise<Address | null> =>{
   try{
    const response = await axios.get(`${baseURL}/${cep}/json`)
    const address: Address = {
        estado: response.data.uf,
        cidade: response.data.cidade,
        bairro: response.data.bairro,
        logradouro: response.data.logradouro
    }
    return address

   }catch(error) {
       console.log("Erro no serviço:", error)
       return null
   }
} 