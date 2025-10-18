import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState('')//we are setting hard coded default value of name
  const formHandler = (e) => {
    e.preventDefault(); //this will prevent the default behaviour of form which is to reload the page
    console.log("Form had been submitted");
  };
  return (
    //here by default we are directly trying to implement form that is not a good sign
    //we should use react to interact with form
    <div>
      <form onSubmit={formHandler}>
        <input
        // this valu will be hardCoded here we can't directly change it
          value={name}
          className="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ..."
          type="text"
          name="name"
          placeholder="Enter Your Name"
          id=""
          onChange={(e)=>{
            setName(e.target.value);//now we are using react to interact with the form
            console.log(e.target.value);
            
          }}
        />
        <button className="mx-4  p-4 bg-blue-500 rounded-lg ">Submit</button>
      </form>
    </div>
  );
};

export default Form;
