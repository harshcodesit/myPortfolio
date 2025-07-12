// Animation utility functions to prevent conflicts and improve performance

export const animationUtils = {
  // Check if user prefers reduced motion
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Debounce function for scroll events
  debounce: (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for performance
  throttle: (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function executedFunction(...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Smooth scroll with fallback
  smoothScrollTo: (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      if ('scrollBehavior' in document.documentElement.style) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        // Fallback for older browsers
        const elementPosition = element.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = elementPosition - startPosition;
        const duration = 1000;
        let start: number | null = null;

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
      }
    }
  },

  // Easing function for smooth animations
  easeInOutCubic: (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  },

  // Check if element is in viewport
  isInViewport: (element: Element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Add animation class with delay
  addAnimationWithDelay: (element: Element, className: string, delay: number = 0) => {
    if (animationUtils.prefersReducedMotion()) {
      element.classList.add(className);
      return;
    }

    setTimeout(() => {
      element.classList.add(className);
    }, delay);
  },

  // Remove animation class
  removeAnimationClass: (element: Element, className: string) => {
    element.classList.remove(className);
  },

  // Check if animation is supported
  supportsAnimations: () => {
    return 'animate' in document.documentElement || 
           'WebkitAnimation' in document.documentElement.style ||
           'MozAnimation' in document.documentElement.style;
  }
};

// Easing function for smooth animations
const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}; 