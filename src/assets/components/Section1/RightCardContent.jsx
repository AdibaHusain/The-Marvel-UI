import React from 'react'
import { MoveRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold rounded-full flex justify-center items-center h-14 w-14 '>{props.id+1}</h2>
        <div>
            <p className='text-xl leading-relaxed mb-10 text-white'>{props.intro}</p>
            <div className='flex justify-between'>
                <button className='bg-blue-950 text-white font-semibold px-8 py-3 rounded-full '>{props.tag}</button>
                <button className='bg-blue-950 text-white font-semibold px-4 py-3 rounded-full '> <MoveRight /></button>
            </div>
        </div>

    </div>
  )
}

export default RightCardContent
