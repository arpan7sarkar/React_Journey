import axios from "axios"
import { useState } from "react";
const ApiCalling = () => {
    
    const [data, setData] = useState([]);
  const getData = async () => {
    const responce= await axios.get('https://picsum.photos/v2/list');
    setData(responce.data);
    
  };
  return (
    <div className="bg-black w-screen h-screen text-white flex flex-col gap-3">
      <p>Here we will learn about calling API's via frontend side</p>
      <p>Generally we have two ways to fetch data one is using inbuild method fetch another is using ecternal librery axious that is much better one and also easy</p>
      <p>One key takeway is api calling is a asynchrouns method so alwasy use async and await else you will get promise pending</p>
      <button
        className="mx-4  p-4 bg-blue-700 rounded-lg w-1/10
         "
        onClick={() => {
          getData();
        }}
      >
        Get data
      </button>
      <div >
        {data.map((elem,idx) => {
            return <div>{idx+1} {elem.author}</div>
        })}
      </div>
    </div>
  );
};

export default ApiCalling;
