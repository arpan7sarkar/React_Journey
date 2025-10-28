import axios from "axios";
import React, { useEffect, useState } from "react";
import Photo from "./components/Photo";

const App = () => {
  const [photoData, setPhotoData] = useState([]);
  const [page, setPage] = useState(1);
  const prev=()=>{
    if(page===1){
      return alert("You are on first page");
    }
    setPage(page-1);
    setPhotoData([]);

  }
  const next=()=>{
    setPage(page+1);
    setPhotoData([]);
  }
  const getData = async () => {
    const responce = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=40`
    );
    setPhotoData(responce.data);
    console.log(photoData);
  };
  let photoDiv = <div className="absolute top-1/2 left-1/2 -translate-1/2 text-2xl">Loading...</div> ;
  const len = Object.keys(photoData).length;
  if (len > 0) {
    {
      photoDiv = photoData.map((e) => {
        return (
          <div>
           <Photo e={e}/>
          </div>
        );
      });
    }
  }
  useEffect(() => {
    getData();
  });
  return (
    <div className="bg-black h-screen text-cyan-200 overflow-auto">
      <div className="flex flex-wrap gap-5">{photoDiv}</div>
      <div className="flex items-center justify-center gap-4 ">
        <button
        style={{opacity: page===1?0.5:1}}
         className="bg-blue-400 px-6 py-2 mt-3 active:scale-95 cursor-pointer text-m rounded-lg text-black"
        onClick={prev}>
          Prev
        </button>
        <div>
          <p className="px-6 text-lg font-semibold rounded-2xl mt-3 py-2">Page: {page}</p>
        </div>
        <button className="bg-blue-400 px-6 py-2 mt-3 active:scale-95 cursor-pointer text-m rounded-lg text-black"
        onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
