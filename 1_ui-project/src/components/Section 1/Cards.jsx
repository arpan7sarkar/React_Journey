import React from "react";
 // import { ArrowRight /> from "lucide-react";
import CardContent from "./CardContent";
const Card = (props) => {
  return (
    <div className="h-full overflow-hidden relative w-80 rounded-4xl shrink-0">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt=""
      />
      <CardContent id={props.id} info={props.info} tag={props.tag}/>
    </div>
  );
};

export default Card;
