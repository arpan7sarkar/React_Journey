import React from "react";

const App = () => {
  const btnClick = () => {
    console.log("Button Clicked");
  };
  const typeChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="p-30 h-5 w-5 bg-black" onMouseMove={function(e){
        console.log(e.clientY)
      }
      // onwheel(function(e){
      //   console.log(e.deltaY)
      // })

      }>

      </div>
    </div>
  );
};

export default App;
