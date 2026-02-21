import { useGellary } from "../hook/useGellary";


const Card = ({img}) => {

  return (
    <div className='flex flex-col justify-between w-37.5 h-50 rounded-lg overflow-hidden'>

      {/* Image */}
      <div className='w-full h-[85%]'>
        <img 
          src={img.download_url}
          
          className='w-full h-full object-cover'
        />
      </div>

      {/* Author */}
      <div className='w-full text-center bg-black items-center'>
        <p className="text-white text-lg py-1 ">
          {img.author}
        </p>
      </div>

    </div>
  );
};

export default Card;