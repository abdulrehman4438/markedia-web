import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const ScrollAnimationWrapper = ({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string;
}) => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className={`scroll-animate ${className}`}>
      {children}
    </div>
  );
};
