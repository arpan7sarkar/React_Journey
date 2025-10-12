import React from "react";

const Card = (props) => {//here the params that i am passing is called props
  const name=props.name;
  const age=props.age;
  return (
    <>
      <div className="card">
        <h1>{name} Sarkar</h1>
        <h2> Web developer</h2>
        <h3>{age}</h3>
      </div>
    </>
  );
};

export default Card;
