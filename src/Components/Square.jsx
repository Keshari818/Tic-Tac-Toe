import React from "react";

const Square = (props) => {
  return (
    <div className="square" onClick={props.onClick}>
      <h5 className="heading">{props.value}</h5>
      
    </div>
  );
};

export default Square;
