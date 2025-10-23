import React from 'react'

import RightCardContent from './RightCardContent.jsx';

const RightCards = (props) => {
  return (
    <div className='h-full shrink-0 overflow-x-auto relative w-80  rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img}></img>
      <RightCardContent id={props.id} tag={props.tag} intro={props.intro}/>
    </div>
  )
}

export default RightCards
