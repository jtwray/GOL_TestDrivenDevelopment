import React from "react";

export default function Grid(props) {
  return (
    <>
      GRID{props.rows}
      {props.grid.map((cell) => (
        <Cell value={cell.value} />
      ))}
    </>
  );
}
/** create input to select grid size rows ===cols
 *
 *
 * use reducer to manage global state
 * reducer={gridArray,fauxgridArray,gridSpeed,gridSize,generation,isRunning}
 */
