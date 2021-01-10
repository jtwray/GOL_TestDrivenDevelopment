import React from "react";

export default function Cell(props) {
  const [isAlive, toggleIsAlive] = React.useState(true);

  return (
    <>
      <div
        onClick={() => toggleIsAlive(!isAlive)}
        className={`cell ${isAlive ? "isAlive" : ""}`}
      >
        {props.value}
      </div>
    </>
  );
}
