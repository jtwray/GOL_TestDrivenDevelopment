import React from "react";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const ui = (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    <Cell />
  </ErrorBoundary>
);

export default function Cell({ state, dispatch, value, cellWidth }) {
  const [isAlive, toggleIsAlive] = React.useState(false);
  const cell = {
    width: `${cellWidth}%`,
    height: `${cellWidth}%`,
    border: "2px inset darkslateblue",
    background: "transparent",
    transition: "all .2s ease",
    transform: "translate3d(0,0,0)",
    flex: `1 ${state.rowLength} ${cellWidth}%`
  };

  const is_Alive = {
    background: "black",
    transition: "all .2s ease",
    transform: "translate3d(0,0,0)"
  };
  return (
    <>
      <div
        onClick={() => toggleIsAlive(!isAlive)}
        style={isAlive ? { ...cell, ...is_Alive } : { ...cell }}
        className={`cell ${isAlive ? "isAlive" : ""}`}
      >
        {value}
      </div>
    </>
  );
}
