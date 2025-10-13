import React from "react";
import { ArrowRight } from "lucide-react"; // import { ArrowRight /> from "lucide-react";
const Card = (props) => {
  const count = props.count || 1;
  return (
    <div className="h-[75vh]  bg-amber-400 w-1/3  rounded-4xl flex flex-col">
      <div className="w-2 h-3 bg-black text-cyan-100 text-center flex items-center rounded-full p-6 mt-10 ml-9">
        <div className="-mx-1">{count}</div>
      </div>

      <div className="pt-50 pl-10 text-2xl font-medium">
        Prime customers,
        <br />
        that have acces <br />
        to bank credit <br />
        and are satisfied <br />
        with the current <br />
        product
        <div></div>
        <div
          // style={{
          //   clipPath:
          //     'path("M0,15 Q0,0 15,0 H130 Q145,0 145,15 Q145,25 160,24 A20,20 0 1,1 160,35 Q145,35 145,45 Q145,60 130,60 H15 Q0,60 0,45 Z")',
          //     padding: "100px",
          // }}
          className=" mx-10 my-12 bg-blue-400 h-4 w-13 px-15 rounded-2xl py-6 "
        >
          <div className="- text-center flex items-center justify-center ">
            Satisfied
          </div>
        </div>
        <button className="">
          <ArrowRight className="h-16 w-14" />
        </button>
      </div>
    </div>
  );
};

export default Card;
