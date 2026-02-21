import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const GellaryContext = createContext()

export const GellaryPeovider = ({ children }) => {

    const [img, setImg] = useState([]);
    const [index, setIndex] = useState(1)
    const [isLoaded, setIsLoaded] = useState(false)

    const getImg = async () => {
        try {
            const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
            setImg(res.data)
        } catch (error) {
            console.log("Invalid credintial", error);
        }
    }

useEffect(() => {
    if (isLoaded) {
        getImg()
    }
}, [index, isLoaded])



    return (
        <  GellaryContext.Provider value={{ img , index , getImg , setIndex , setIsLoaded}} >
            {children}
        </ GellaryContext.Provider >
    )
}

export default GellaryContext;