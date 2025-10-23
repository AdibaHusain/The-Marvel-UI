import React from 'react'
import LeftText from './LeftText'
import Righttext from './Righttext'

const Page1Content = (props) => {
  return (
    <div className='py-10 flex items-center gap-10 h-[90vh] px-18'>
        <LeftText />
        <Righttext users={props.users} />
      
    </div>
  )
}

export default Page1Content
