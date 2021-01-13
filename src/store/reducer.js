// import initialState from "./state";

export const initialState = {
  gridArray: [],
  fauxgridArray: [],
  gridCell: {
    value: 0,
    idx: "row_col",
    neighbors: [
      "r-1_c-1",
      "r-1_c",
      "r-1_c+1",
      "r_c-1",
      "r_c",
      "r_c+1",
      "r+1_c-1",
      "r+1_c",
      "r+1_c+1"
    ],
    liveNeighborsCount: 0
  },
  gridSpeed: 1,
  rowLength: 10,
  gridSize: 100,
  generation: 0,
  isRunning: false
};

export function gridReducer(state = initialState, action) {
  switch (action.type) {
    case "GAME_START":
      return {
        ...state,
        isRunning: true
      };

    case "GAME_STOP":
      return {
        ...state,
        isRunning: false
      };
    case "SET_GRIDSIZE":
      return {
        ...state,
        isRunning: false,
        gridSize: state.rowLength ** 2
      };

    case "CLEAR_GRID":
      let clearGrid = [];
      for (i = 0; i < state.gridSize; i++) {
        let clonedCell = { ...state.gridArray[i] };
        clearGrid.push({ ...clonedCell, value: 0 });
      }
      return {
        ...state,
        gridArray: clearGrid
      };

    case "RANDOM_GRID":
      let randomGrid = [];
      for (i = 0; i < state.gridSize; i++) {
        let ranNum = () => Math.floor(Math.random() * 2);
        let clonedCell = { ...state.gridArray[i] };
        randomGrid.push({ ...clonedCell, value: ranNum });
      }
      return {
        ...state,
        gridArray: randomGrid
      };

    case "INCREMENT_ONE":
      return { ...state };

    case "TOGGLE_CELL":
      return { ...state };

    case "SELECT_PRESET":
      return { ...state };

    case "SELECT_SPEED":
      return { ...state };

    case "SELECT_SIZE":
      return { ...state };

    default:
      return { ...state };
  }
}