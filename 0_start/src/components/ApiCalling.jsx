import React from "react";

const ApiCalling = () => {
  const getData = () => {
    console.log("Getting data");
  };
  return (
    <div className="bg-black w-screen h-screen text-white flex flex-col gap-3">
      <p>Here we will learn about calling API's via frontend side</p>
      <button
        className="mx-4  p-4 bg-blue-300 rounded-lg w-1/10
         "
        onClick={() => {
          getData();
        }}
      >
        Get data
      </button>
    </div>
  );
};

export default ApiCalling;
