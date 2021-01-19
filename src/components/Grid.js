import React, { useReducer } from 'react';
import { useAniFrame } from '../utils/useAnimationLoop';
import Cell from './Cell';
import { gridReducer } from '../store/gridReducer';
import { gridSubcontainer } from '../utils/styles';
import { initialState, init } from '../store/initialState';
import {
  Box,
  ButtonGroup,
  Button,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import ControlPanel from './ControlPanel';

export default function Grid() {
  const next = () => dispatch({ type: 'NEXT' });
  init();
  const [state, dispatch] = useReducer(gridReducer, initialState);
  const [step, start, stop] = useAniFrame(next, state.delay, state);
  const toggleStart = () => {
    if (state.isRunning) {
      dispatch({ type: 'STOP' });
      stop();
    }
    if (!state.isRunning) {
      dispatch({ type: 'START' });
      start();
    }
  };

  const random = () => {
    let randomGridHASH = { ...state.gridHASH };
    for (let cell in randomGridHASH) {
      let randomNum = Math.floor(Math.random() * 2);
      randomGridHASH[cell] = randomNum;
    }
    dispatch({ type: 'RANDOM', payload: randomGridHASH });
  };

  const clear = () => {
    let clearGridHASH = { ...state.gridHASH };
    for (let cell in clearGridHASH) {
      clearGridHASH[cell] = 0;
    }
    dispatch({ type: 'CLEAR', payload: clearGridHASH });
  };

  return (
    <>
      <ControlPanel
        random={random}
        clear={clear}
        step={step}
        toggleStart={toggleStart}
        isRunning={state.isRunning}
        generation={state.generation}
      />
      <div id="gridContainer" justify="space-around">
        <div style={gridSubcontainer}>
          {state.gridHASH &&
            Object.entries(state.gridHASH).map(([key,val]) => (
              <Cell state={state} dispatch={dispatch} cellID={key} val={val} key={`_${key}`}/>
            ))}
        </div>
      </div>
    </>
  );
}
