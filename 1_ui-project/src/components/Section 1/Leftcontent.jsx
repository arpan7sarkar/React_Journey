import React from "react";
import { ArrowUpRight } from 'lucide-react';
const LeftContent = () => {
  return (
    
    <div className="bg-gray-400 h-full w-2/7">
      <div className="flex text-6xl flex-col pt-30 font-bold">
        <div>Prospective</div>
        <div>customer</div>
        <div>segmentation</div>
      </div>
      <div className="text-2xl pt-5 font-mono font-medium">
        Depending on customer <br /> satisfaction and acces <br />
        to banking products,potential <br /> target audience can be divided{" "}
        <br />
        into three groups
      </div>
      <div className="pt-40">
        <ArrowUpRight className="h-16 w-14" />
      </div>
    </div>
  );
};

export default LeftContent;
