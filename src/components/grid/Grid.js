import React, { useEffect, useState, useRef } from "react";
import Cell from "./Cell";
export default function Grid({ state, dispatch, grid }) {
  const gridStyle = {
    width: "90vw",
    margin: "0 auto",
    height: "90vw",
    display: "flex",
    flexWrap: "wrap",
    outline: "inset 10px indigo"
  };
  return (
    <>
      <h2>GAME</h2>
      <div id="gridBox" style={gridStyle}>
        {grid.map((cell, idx) => (
          <Cell
            key={`${cell.value}_${idx}`}
            value={idx}
            state={state}
            dispatch={dispatch}
            cellWidth={100 / state.rowLength}
          />
        ))}
      </div>
    </>
  );
}
/** create input to select grid size rows ===cols
 *
 *
 * use reducer to manage global state
 * reducer={gridArray,fauxgridArray,gridSpeed,gridSize,generation,isRunning}
 *
 * state.rowLen state.gridSize
 *
 * flex: 1 10 windowWidth/rowLen*
 *
 *
 * mobile 1st
 * max width 400px      max rowsLength 40 rows/cols    10px each
 * at min of 10 rows/cols thats 40 px each cell
 * determine cell|grid|window at load time
 * grid === 90 vw 360px or max of 400px 360px 10 cells across at 36 px a piece
 *   set gridWidth to a variable
 *    use gridWidth to determine cell width === gridWidth/rowLength === 360/10 === 36px cellWidth /cellHeight
 *    in cell styles   use flex:1 cellWidth;
 */
