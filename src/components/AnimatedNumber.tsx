"use client";

import { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  targetNumber: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  targetNumber,
  duration = 2000, // 2 seconds
  className,
  suffix = "",
  prefix = ""
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCurrentNumber(Math.floor(progress * targetNumber));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [targetNumber, duration]);

  return (
    <span className={className}>
      {prefix}{currentNumber.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedNumber;
