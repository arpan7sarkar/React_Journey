import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [photoData, setPhotoData] = useState([]);
  const getData = async () => {
    const responce = await axios.get("https://picsum.photos/v2/list");
    setPhotoData(responce.data);
    console.log(photoData);
  };
  let photoDiv = "e ";
  const len = Object.keys(photoData).length;
  if (len > 0) {
    {
      photoDiv = photoData.map(( e) => {
        return (
          <div >
            <img src={e.download_url} alt="" className="object-cover w-70 h-70 overflow-auto" />
          </div>
        );
      });
    }
  }
  return (
    <div className="bg-black h-screen text-cyan-200">
      <button
        onClick={getData}
        className="bg-blue-400 active:scale-95 px-4 py-2 rounded-xl"
      >
        Click me
      </button>
      <div className="flex flex-wrap gap-5">{photoDiv}</div>
    </div>
  );
};

export default App;
