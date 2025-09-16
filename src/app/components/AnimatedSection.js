'use client';

import { useInView } from 'react-intersection-observer';

function AnimatedSection({ children, className }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? 'fade-in-up' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
