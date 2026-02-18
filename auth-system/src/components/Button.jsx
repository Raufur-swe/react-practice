const Button = ({children , ...proops})=>{
    return(
        <button {...proops} className=" w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-60 transition " >
            {children}
        </button>
    )
}

export default Button