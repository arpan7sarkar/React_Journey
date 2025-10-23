import React from "react";

const ApiCalling = () => {
  const getData = async() => {
    const responce= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data= await responce.json();
    console.log(data);
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
    </div>
  );
};

export default ApiCalling;
