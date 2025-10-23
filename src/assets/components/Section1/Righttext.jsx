import React from 'react'
import RightCards from './RightCards.jsx'

const Righttext = (props) => {
    const repeatedUsers = [...props.users, ...props.users]
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-10 animate-scroll">
        {repeatedUsers.map((elem, index) => (
          <RightCards key={index} id={index} img={elem.img} tag={elem.tag} intro={elem.intro}/>
        ))}
      </div>
    </div>
  )
}

export default Righttext
/* <div className='h-full w-2/3 mr-2 gap-10 flex flex-nowrap'>
      {props.users.map(function(elem,idx){
        return <RightCards key={idx} id={idx} img={elem.img} tag={elem.tag} />

      })}
    </div>*/