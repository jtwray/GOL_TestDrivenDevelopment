import React, { useState } from "react";
import Grid from "./Grid";
export default function GridContainer() {
  const [rows, setRows] = useState("rows");
  return (
    <>
      <Grid rows={rows} grid={grid} />
    </>
  );
}
