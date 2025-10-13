import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'
const Section1 = (props) => {
  return (
    <div className=''>
      <Navbar/>
      <Page1Content users={props.users}/>
    </div>
  )
}

export default Section1
