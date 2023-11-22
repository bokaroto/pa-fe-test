import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function SlideLeftAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="sliding" ref={ref}>
      <span
        className="left"
        style={{
          transform: isInView ? 'none' : 'translateX(200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  );
}