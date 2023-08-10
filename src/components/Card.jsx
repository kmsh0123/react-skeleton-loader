import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const Card = ({pd}) => {
  const [loading,setLoading] = useState(true);
  const [title,setTitle] = useState();
 
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
      setTitle(pd.title);
    },1000)
  })

  return (
   <div className={`max-w-xs overflow-hidden my-5 mx-5 bg-white rounded-lg shadow ${loading ? "shadow-white" : "shadow-black"}`}>
    <div className="px-4 py-2">
      <h1 className="text-xl font-bold  uppercase text-black">{title || <Skeleton width={235} height={40}/>}</h1>
    </div>
    {
      loading ? <Skeleton className='w-full h-48 mt-2'/> : <img className="object-cover w-full h-48 mt-2" src={pd.images[0]} alt="NIKE AIR" />
    }
   
    
    <div className="flex items-center justify-between px-4 py-2 ">
{
  loading ? <Skeleton width={50} height={25}/> : <h1 className="text-lg font-bold text-black">$129</h1>

}      {
        loading ? <Skeleton width={100} height={25} className='px-2 py-1'/> : <button className="px-2 py-1 text-xs font-semibold uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
  
      }
    </div>
  </div>


  )
}

export default Card