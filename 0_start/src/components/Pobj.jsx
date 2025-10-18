import React, { useState } from "react";

const Pobj = () => {
  const [user, setuser] = useState({ name: "Arpan", age: 22 });
  const [arr, setarr] = useState([10, 15, 18]);
  //for changing stuff in object or array we have to use spread operator and then have to pass that inside setuser
  const changeUser = () => {
    console.log(user);
    let u = { ...user };
    u.name = "Arpan S";
    u.age = u.age + 1;
    setuser(u);
    console.log(user);
  };
  const changeArr = () => {
    console.log(arr);
    let newArr = [...arr];
    newArr[0]++;
    newArr[1]++;
    newArr[2]++;
    setarr(newArr);
    console.log(arr);
  };

  // batch update
  const update = () => {
      setarr(prev=> [...prev, 20]);//prev is the previous state
      setarr(prev=> [...prev, 30]);//this is another way of pushing
  }
  return (
    <div>
      <h1>Name:{user.name}</h1>
      <h1>Age:{user.age}</h1>
      <button
        className="mx-4  p-4 bg-blue-300 rounded-lg "
        onClick={() => {
          changeUser();
        }}
      >
        Click
      </button>

      <h1>{arr}</h1>
      <button
        className="mx-4  p-4 bg-blue-500 rounded-lg "
        onClick={() => {
          update();
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Pobj;
