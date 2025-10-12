import React from "react";
const Card = (props) => {
  //here the params that i am passing is called props
  const companyName = props.companyName;
  const jd = props.jd;
  const time = props.time; //part-time or full time
  const special = props.special; // special fetures eg senior level / flexible schedule
  const pay = props.pay;
  const location = props.location;
  const logo=props.logo;

  return (
    <div className="papa">
      <div className="parent">
        <div className="top">
          <div className="logo">{logo}</div>
          <div className="save"></div>
        </div>
        <div className="main">
          <h4>{companyName}</h4>
          <h2>{jd}</h2>
          <div className="details">
            <div className="one">{time}</div>
            <div className="two">{special}</div>
          </div>
          <div className="footer">
            <div className="pay-location">
              <div className="pay">{pay}</div>
              <div className="location"></div>
            </div>
            <div className="apply-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
