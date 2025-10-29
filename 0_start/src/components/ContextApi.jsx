import React, { useContext } from 'react'
import { themeData } from '../Context/ThemeContext';

const ContextApi = () => {
    const data=useContext(themeData);//this will access the data .
    console.log(data)
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default ContextApi
