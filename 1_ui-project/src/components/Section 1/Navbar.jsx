import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-24 py-6">
      <div className="font-mono bg-black text-white px-4 py-2.5 rounded-3xl flex justify-between uppercase space-x-9">
        <div>Target</div>
        <div>Audience</div>
      </div>
      <div className="font-mono bg-gray-300 px-6 py-2 rounded-3xl space-x-4 uppercase flex text-lg font-medium">
        <div>digital</div>
        <div>banking</div>
        <div>Platform</div>
      </div>
    </div>
  );
};

export default Navbar;
