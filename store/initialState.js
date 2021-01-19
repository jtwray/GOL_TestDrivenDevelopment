import { calcNEXT } from "../utils/calcNEXT";
import { gridSEED } from "../utils/gridSEED";
import { setGRID } from "../utils/setGRID";
export function init() {
  const initialState = {
    bufferHASH: calcNEXT(setGRID(400)),
    delay: 500,
    generation: 0,
    gridHASH: { ...setGRID(400) },
    gridSIZE: 400,
    isRunning: false,
    rowLen: 20
  };
  return initialState;
}

export const initialState = {
  bufferHASH: calcNEXT(setGRID(400)),
  delay: 500,
  generation: 0,
  gridHASH: { ...setGRID(400) },
  gridSIZE: 400,
  isRunning: false,
  rowLen: 20
};
