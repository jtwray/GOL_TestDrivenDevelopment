import React from "react";
import Cell from "./Cell";
export default function Grid(props) {
  return (
    <>
      <h2>GAME</h2>

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
