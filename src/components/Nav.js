import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <Link to="/game">Game</Link>
      <Link to="/rules">Rules</Link>
      <Link to="/about">About</Link>
    </>
  );
}
