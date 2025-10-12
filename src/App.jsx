import React from "react";
import Card from "./components/card";
const App = () => {
  return (
    <>
      <Card
        companyName="TechCorp Solutions"
        jd="SDE 2"
        time="full-time"
        special="Senior Level"
        pay="$150,000 - $180,000 / year"
        location="Remote (US)"
      />
      <Card
        companyName="Global Logistics Inc."
        jd="Junior Data Analyst"
        time="full-time"
        special="Entry Level"
        pay="$55,000 / year + Bonus"
        location="Dallas, TX"
      />
    </>
  );
};

export default App;
