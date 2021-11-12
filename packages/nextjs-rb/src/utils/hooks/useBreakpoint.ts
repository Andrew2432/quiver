import { useState, useEffect } from "react";
import debounce from "debounce";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export const SIZE_XS: Breakpoint = "xs";
export const SIZE_SM: Breakpoint = "sm";
export const SIZE_MD: Breakpoint = "md";
export const SIZE_LG: Breakpoint = "lg";
export const SIZE_XL: Breakpoint = "xl";
export const SIZE_XXL: Breakpoint = "xxl";

const resolveBreakpoint = (width: number): Breakpoint => {
  if (width < 576) {
    return SIZE_XS;
  } else if (width >= 576 && width < 768) {
    return SIZE_SM;
  } else if (width >= 768 && width < 992) {
    return SIZE_MD;
  } else if (width >= 992 && width < 1200) {
    return SIZE_LG;
  } else if (width >= 1200 && width < 1440) {
    return SIZE_XL;
  } else {
    return SIZE_XXL;
  }
};

/** Get Media Query Breakpoints in React */
const useBreakpoint = (): Breakpoint => {
  const [size, setSize] = useState(() =>
    resolveBreakpoint(typeof window !== "undefined" ? window.innerWidth : 600)
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const calcInnerWidth = debounce(function () {
        setSize(resolveBreakpoint(window.innerWidth));
      }, 200);
      window.addEventListener("resize", calcInnerWidth);
      return () => window.removeEventListener("resize", calcInnerWidth);
    }
  }, []);

  return size;
};

export default useBreakpoint;
