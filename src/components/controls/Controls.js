import React from "react";
import Random from "../controls/Random";

export default function Controls({ state, dispatch }) {
  return (
    <>
      <Random state={state} dispatch={dispatch} />
    </>
  );
}
