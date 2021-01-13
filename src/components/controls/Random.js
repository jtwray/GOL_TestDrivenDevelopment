import React from "react";
import Button from "../Button";

export default function Random({ state, dispatch }) {
  return (
    <Button type="random" onClick={() => dispatch({ type: "RANDOM_GRID" })} />
  );
}
