import { useContext } from "react"
import GellaryContext from "../component/Gellarycontext"



export const useGellary = ()=>{
    return useContext(GellaryContext)
}