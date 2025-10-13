import React from "react";
import Card from "./Cards";
const RightContent = (props) => {
  return (
    <div className=" h-full w-5/7 p-6 flex gap-5 flex-nowrap overflow-x-auto">
      {props.users.map((elem,idx) => {
        return <Card id={idx} img={elem.img} info={elem.info} tag={elem.tag} />
      })}
    </div>
  );
};

export default RightContent;
