const initialState = {
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
  gridSize: 10,
  generation: 0,
  isRunning: false
};

export default initialState;
