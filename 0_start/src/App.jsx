import React from 'react'

const App = () => {
  const btnClick = () => {
    console.log('Button Clicked')
  }
  return (
    <div>
      <button onClick={btnClick}>Click</button>
      <button onClick={() => console.log('Button Clicked hua')}>Click</button>
      <input onChange={function(e){
        console.log(e.target.value);
      }} className='mt-10 px-15 py-7 border-2' type="text" name="" placeholder='Enter your name' id="" />
    </div>
  )
}

export default App
