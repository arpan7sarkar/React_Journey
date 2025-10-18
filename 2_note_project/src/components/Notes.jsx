import React from "react";
import { useState } from "react";

const Notes = () => {
  const [head, setHead] = useState("");
  const [context, setContext] = useState("");
  const defaultForm=(e)=>{
    e.preventDefault();
    console.log("Your note had been saved");
    setHead('');
    setContext('');
  }
  return (
    <div>
      <form onSubmit={defaultForm} className="flex flex-col h-screen w-screen ">
        <input
          type="text"
          placeholder="Enter the heading"
          name=""
          id=""
          value={head}
          className="textarea textarea-primary textarea-xl  m-4 px-6 py-2 rounded outline-none"
          onChange={(e)=>{
            setHead(e.target.value);
          }}
        />
        <textarea
          placeholder="Enter the context"
          name=""
          id=""
          cols="30"
          rows="10"
          value={context}
          className="textarea textarea-primary m-4 px-6 py-2 rounded "
          onChange={(e)=>{
            setContext(e.target.value);
          }}
          
        ></textarea>
        <button className="btn w-1/5 mx-4 px-6  rounded ">Default</button>
      </form>

    </div>
  );
};

export default Notes;
