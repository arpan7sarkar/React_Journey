import React from "react";
 // import { ArrowRight /> from "lucide-react";
import CardContent from "./CardContent";
const Card = (props) => {
  return (
    <div className="h-full overflow-hidden relative w-80 rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1712174766230-cb7304feaafe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW4lMjBwb3J0cmFpdHMlMjBpbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700"
        alt=""
      />
      <CardContent/>
    </div>
  );
};

export default Card;
