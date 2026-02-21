import React, { useEffect } from 'react'
import Card from './context/Card'
import { useGellary } from './hook/useGellary'

const App = () => {
  const {img , getImg , index ,setIndex , setIsLoaded} = useGellary()

  return (
    <div className='min-h-screen px-5 py-5 flex flex-col gap-5   '>
  
    <button className=' bg-black py-2 px-1 text-white rounded-lg w-50 cursor-pointer ' onClick={()=>{setIsLoaded(true), getImg()}} >
      Get-image
    </button>
   <div className=' flex flex-wrap gap-5 ' >
    {img.map((i)=>(
      <Card key={i.id} img={i} />
    ))}
   </div>
  <button 
  onClick={() => setIndex(index + 1)}
  className='bg-black py-2 px-1 text-white rounded-full w-20 h-10'
>
  Next -{index}
</button>
    
    </div>
  )
}

export default App