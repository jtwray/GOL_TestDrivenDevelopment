import React from 'react';

export default function Cell({ cellID, val, state, dispatch }) {
  let cellWidth = `${100 / state.rowLen}`;
  let cellStyles = {
    background: 'transparent',
    border: 'inset lime 3px',
    color: 'lime',
    flex: `0 ${state.rowLen} ${cellWidth}%`,
    fontSize: cellWidth * 3 + 'px',
    width: `${100 / state.rowLen}%`,
    height: `${100 / state.rowLen}%`,
    textAlign: 'center',
    textShadow: '-.5px .5px .1px black, .5px -.5px .2px white',
    transition: 'all .2s ease',
    transform: 'translate3d(0,0,0)',
    display: 'flex',
    placeContent: 'center',
  };
  let liveCellStyles = { background: 'black', color: 'lime' };

  return (
    <div
      onClick={() =>
        dispatch({
          type: 'TOGGLECELL',
          payload: { cellID: cellID, val: val === 0 ? 1 : 0 },
        })
      }
      style={{ ...cellStyles, ...(val === 1 && liveCellStyles) }}
    >
      {val}
    </div>
  );
}
