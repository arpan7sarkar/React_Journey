import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './Rightcontent'
const Page1Content = () => {
  return (
    <div className='flex bg-cyan-600 h-[89vh] justify-between items-center px-18 gap-25'>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page1Content
