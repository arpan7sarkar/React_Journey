import React from 'react'
import { ArrowRight } from "lucide-react";
const CardContent = (props) => {
  const count = props.count || 1;
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full text-white p-10 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl text-black font-semibold">{count}</h2>
        <div>
          <p className="text-3xl font-base font-sans leading-normal mb-8">
            Prime customers,
            <br />
            that have acces <br />
            to bank credit <br />
            and are satisfied <br />  
            with the current <br />
            product
          </p>
          <div className="flex justify-between mt-1">
            <button className="bg-blue-500 text-white font-medium px-12 py-2 rounded-full text-base">Satsified</button>
            <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-full text-base">
              <ArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardContent
