import React, { useContext } from 'react'
import { themeData } from '../Context/ThemeContext';

const ContextApi = () => {
    const data=useContext(themeData);//this will access the data .
    console.log(data)
  return (
    <div>
      wtf
    </div>
  )
}

export default ContextApi
