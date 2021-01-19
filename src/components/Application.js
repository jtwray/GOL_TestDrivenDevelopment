import React from 'react';
import { Route } from 'react-router-dom';
import Game from '../views/Game';
import LandingPage from '../views/LandingPage';
import About from '../views/About';
import Rules from '../views/Rules';
import { AnimatePresence, motion } from 'framer-motion';

export default function Application() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Route path="/" component={LandingPage} />
      <Route path="/game" component={Game} />
      <Route path="/about" component={About} />
      <Route path="/rules" component={Rules} />{' '}
    </AnimatePresence>
  );
}
