import React from 'react';
import { NavLink } from 'react-router-dom';
import {navStyles} from "../utils/styles"

export default function Navigation() {
  return (
    <>
      <nav style={navStyles}>
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/rules">Rules</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </>
  );
}
