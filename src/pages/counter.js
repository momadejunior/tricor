import React, { useEffect, useState, useRef } from 'react';

const CounterItem = ({ stop, speed }) => {
  const [count, setCount] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          let start = 0;
          const duration = speed;
          const end = parseInt(stop, 10);
          let startTime = null;

          const countUp = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const step = Math.min(progress / duration, 1) * end;
            setCount(Math.floor(step));

            if (progress < duration) {
              requestAnimationFrame(countUp);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(countUp);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [stop, speed, hasCounted]);

  return (
    <div className="counter-item" ref={countRef}>
      <div className="count-text">{count}+</div>
    </div>
  );
};

export default CounterItem;
