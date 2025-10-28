import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [photoData, setPhotoData] = useState([]);
  const getData = async () => {
    const responce = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=40"
    );
    setPhotoData(responce.data);
    console.log(photoData);
  };
  let photoDiv = "No photos avilable";
  const len = Object.keys(photoData).length;
  if (len > 0) {
    {
      photoDiv = photoData.map((e) => {
        return (
          <div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={e.download_url}
                alt=""
                className="object-cover w-77 h-70 overflow-auto"
              />
              <div>{e.author}</div>
            </div>
          </div>
        );
      });
    }
  }
  useEffect(() => {
    getData();
  })
  return (
    <div className="bg-black h-screen text-cyan-200 overflow-auto">
      <div className="flex flex-wrap gap-5">{photoDiv}</div>
    </div>
  );
};

export default App;
