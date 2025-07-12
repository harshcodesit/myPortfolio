import { animationUtils } from './animationUtils';

export const smoothScrollTo = (elementId: string) => {
  animationUtils.smoothScrollTo(elementId);
};

export const getScrollProgress = (): number => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return (scrollTop / docHeight) * 100;
};

// Throttled scroll handler for better performance
export const createThrottledScrollHandler = (callback: Function, delay: number = 16) => {
  return animationUtils.throttle(callback, delay);
};

// Debounced scroll handler for better performance
export const createDebouncedScrollHandler = (callback: Function, delay: number = 100) => {
  return animationUtils.debounce(callback, delay);
};