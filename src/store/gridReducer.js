import { calcNEXT } from '../utils/calcNEXT';
import { initialState } from './initialState';

export function gridReducer(state = initialState, action) {
  switch (action.type) {
    case 'START':
      console.log('CASE START');
      return { ...state, isRunning: true };
    case 'STOP':
      console.log('CASE STOP');
      return { ...state, isRunning: false };
    case 'TOGGLECELL':
      console.log('CASE TOGGLECELL', action.payload);
      let updatedHASH = {
        ...state.gridHASH,
        [action.payload.cellID]: action.payload.val,
      };
      return {
        ...state,
        gridHASH: {
          ...state.gridHASH,
          ...{ [action.payload.cellID]: action.payload.val },
        },
        bufferHASH: {
          ...state.bufferHASH,
          ...{ [action.payload.cellID]: action.payload.val },
        },
      };
    case 'RANDOM':
      console.log('CASE RANDOM');
      return {
        ...state,
        gridHASH: { ...action.payload },
        bufferHASH: { ...calcNEXT(action.payload) },
      };
    case 'CLEAR':
      console.log('CASE CLEAR');
      return {
        ...state,
        gridHASH: { ...action.payload },
        bufferHASH: { ...action.payload },
        generation: 0,
      };
    case 'SETSIZE':
      console.log('CASE SETSIZE');
      return {
        ...state,
        gridSIZE: action.payload,
      };
    case 'SETSPEED':
      console.log('CASE SETSPEED');
      return {
        ...state,
        delay: action.payload,
      };
    case 'NEXT':
      console.log('CASE NEXT');
      return {
        ...state,
        gridHASH: state.bufferHASH,
        bufferHASH: calcNEXT(state.bufferHASH),
        generation: state.generation + 1,
      };
    default:
      return {
        ...state,
      };
  }
}
