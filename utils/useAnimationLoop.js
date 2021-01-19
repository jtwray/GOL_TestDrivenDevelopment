import { useRef, useState } from "react";

export const useAniFrame = (aniCallback, interval, state) => {
  const [period, setPeriod] = useState(interval);

  const requestRef = useRef();
  const startTimeRef = useRef(0);

  const animateOnce = () => {
    aniCallback();
  };

  const animateRecursively = (timestamp) => {
    console.log(
      { timestamp },
      { "startTimeRef.current": startTimeRef.current },
      { "requestRef.current": requestRef.current },
      { state: state }
    );

    if (timestamp - startTimeRef.current >= period) {
      aniCallback();
      startTimeRef.current = timestamp;
    }

    requestRef.current = requestAnimationFrame(animateRecursively);
  };

  const step = () => (requestRef.current = requestAnimationFrame(animateOnce));
  const start = () =>
    (requestRef.current = requestAnimationFrame(animateRecursively));
  const stop = () => cancelAnimationFrame(requestRef.current);

  return [step, start, stop];
};
