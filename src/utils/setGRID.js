export function setGRID(size) {
  let gridHASHSEED = {};
  for (let cell = 0; cell < size; cell++) {
    gridHASHSEED[`box${cell}`] = 0;
  }
  return gridHASHSEED;
}
