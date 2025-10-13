import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContents'
const Page1Content = (props) => {
  return (
    <div className='flex h-[89vh] justify-between items-center px-18 gap-25'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
