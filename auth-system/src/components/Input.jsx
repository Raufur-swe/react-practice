const Input = ({...proops})=>{

    return(
        <input {...proops} className=" w-full p-3 border rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 " />
    )
}

export default Input;