import { use } from "react"
import { useNavigate } from "react-router-dom"

const Notfound = () => {
  let navigate = useNavigate();//use navigate is also comes from react router dom and it is used for navigation/works similer to LINK tag
  //but useNavigate does far better eg page switch back next page
  const btnClicked = () => {
    navigate('/')
  }
  return (
    <div className="text-red-600 ">
      <h2>404 Not found</h2>
      <button onClick={btnClicked} className="active:scale-95 cursor-pointer bg-red-700 p-5 text-lg text-white font-semibold rounded-3xl absolute bottom-1/3 left-180">Go to Home</button>
    </div>
  )
}

export default Notfound
