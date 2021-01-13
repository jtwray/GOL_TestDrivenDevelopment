import React from "react";

export default function Cell(props) {
  const [isAlive, toggleIsAlive] = React.useState(true);
  const cell = {
    width: "10px",
    height: "10px",
    border: "2px inset darksteelblue",
    background: "transparent"
  };
  const is_Alive = {
    background: "black",
    transition: "all .2s ease",
    transform: "translate3d(0,0,0)"
  };
  return (
    <>
      <div
        onClick={() => toggleIsAlive(!isAlive)}
        style={isAlive ? { ...cell, ...is_Alive } : { ...cell }}
        className={`cell ${isAlive ? "isAlive" : ""}`}
      >
        {props.value}
      </div>
    </>
  );
}
