import React from "react";

export const Square = (props) => {
  return (
    <div className="square" onClick={props.onClick}>
      <h5> {props.value} </h5>
    </div>
  );
};
