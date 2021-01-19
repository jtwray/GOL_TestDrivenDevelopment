export function calcNEXT(gridARG) {
  let gridHASH = gridARG;
  let newGrid = { ...gridHASH };
  let gridARR = Object.keys(gridHASH);
  let gridSIZE = gridARR.length;
  let rowLen = Math.sqrt(gridSIZE);

  for (let idx = 0; idx < gridSIZE; idx++) {
    let nbrs = [
      gridHASH[gridARR[`${idx - (rowLen + 1)}`]] || 0,
      gridHASH[gridARR[`${idx - rowLen}`]] || 0,
      gridHASH[gridARR[`${idx - (rowLen - 1)}`]] || 0,
      gridHASH[gridARR[`${idx - 1}`]] || 0,
      gridHASH[gridARR[`${idx + 1}`]] || 0,
      gridHASH[gridARR[`${idx + (rowLen - 1)}`]] || 0,
      gridHASH[gridARR[`${idx + rowLen}`]] || 0,
      gridHASH[gridARR[`${idx + (rowLen + 1)}`]] || 0
    ];

    let liveNBRSCOUNT = nbrs.reduce((acc, crrt) => (acc += crrt));

    if (liveNBRSCOUNT == 3) {
      newGrid[gridARR[idx]] = 1;
    } else if (liveNBRSCOUNT == 2) {
      newGrid[gridARR[idx]] = gridHASH[gridARR[idx]];
    } else {
      newGrid[gridARR[idx]] = 0;
    }
  }

  return newGrid;
}
