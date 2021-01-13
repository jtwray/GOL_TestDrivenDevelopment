import React, { useState, useReducer, useEffect } from "react";
import Grid from "./Grid";
import Controls from "../controls/Controls"
import { initialState, gridReducer } from "../../store/reducer";

export default function GridContainer() {
  const [rows, setRows] = useState("rows");
  const [state, dispatch] = useReducer(gridReducer, initialState);

  useEffect(() => {
    dispatch({ type: "CLEAR_GRID" });
  }, []);
  return (
    <>
      <Grid rows={rows} grid={state.gridArray} state={state} dispatch={dispatch} />
      <Controls state={state} dispatch={dispatch} />
    </>
  );
}
