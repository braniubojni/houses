/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react';

const useDidUpdate = (cb: Function, deps: any[]) => {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) cb();
    else hasMount.current = true;
  }, deps);
};

export { useDidUpdate };
