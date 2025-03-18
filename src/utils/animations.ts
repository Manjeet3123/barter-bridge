
// Animation utility for handling scroll animations
export const setupScrollAnimations = () => {
  // For browsers that support IntersectionObserver
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  } 
  // Fallback for browsers that don't support IntersectionObserver
  else {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.9) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run once on mount
    animateOnScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }
};

// Add custom animation delays to elements
export const addAnimationDelays = (selector: string, baseDelay = 50) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    const el = element as HTMLElement;
    el.style.animationDelay = `${index * baseDelay}ms`;
    el.style.animationFillMode = 'forwards';
  });
};
