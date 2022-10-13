import { useState, useLayoutEffect } from 'react'

export const useWindowWidth =() =>{
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      const updateWindowSize=()=> {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateWindowSize);
      updateWindowSize();
      // clear useLayoutEffect hook
      return () => window.removeEventListener('resize', updateWindowSize);
    }, []);
    return size;
  }
  