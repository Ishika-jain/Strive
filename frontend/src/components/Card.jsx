import React from 'react'
import { useNavigate } from 'react-router-dom'





const Card = ({skill,route}) => {
    const navigate =useNavigate();
   const  handleClick=()=>{
        navigate(`/${route}`)
        }
  return (
    <div className="p-4 bg-bpink h-48 w-96 rounded-md bg-lightestBlue  text-black flex flex-col gap-5 justify-between ">
        <p className="text-lg text-zinc-500">Prepare By Topics</p>
        <p className="font-semibold text-2xl">{skill}</p>
        <button className='bg-darkestBlue	 px-4 py-2 rounded-md text-white' onClick={handleClick}>Continue Preparation</button>
       

    </div>
  )
}

export default Card