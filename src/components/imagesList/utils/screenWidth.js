import { useState, useEffect } from "react";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  const [dimensions, setDimensions] = useState(
    hasWindow ? window.innerWidth : null
  );
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions(hasWindow ? window.innerWidth : null);
    }, 1000);
    if (hasWindow) {
      window.addEventListener("resize", debouncedHandleResize);
    }
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }); 

  return dimensions;
}
