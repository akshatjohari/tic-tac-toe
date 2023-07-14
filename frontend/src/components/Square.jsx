import React from "react";

export const Square = (props) => {
  return (
    <div className="square" onClick={props.onClick} id={props.id}>
      <h5> {props.value} </h5>
    </div>
  );
};
