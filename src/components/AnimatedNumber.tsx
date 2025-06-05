"use client"; // Keep this if it's a client component

import { useEffect, useState, useRef } from "react"; // Import useRef

interface AnimatedNumberProps {
  targetNumber: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  animateOnView: boolean; // Add the new prop
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  targetNumber,
  duration = 2000, // 2 seconds
  className,
  suffix = "",
  prefix = "",
  animateOnView, // Destructure the new prop
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const hasAnimatedRef = useRef(false); // Use a ref to track if animation has happened

  // Effect to handle animation when in view
  useEffect(() => {
    // Only animate if `animateOnView` is true and it hasn't animated yet
    if (animateOnView && !hasAnimatedRef.current) {
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        // Ensure the number reaches the target exactly at the end
        if (progress === 1) {
          setCurrentNumber(targetNumber);
          hasAnimatedRef.current = true; // Mark as animated
        } else {
          setCurrentNumber(Math.floor(progress * targetNumber));
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    } else if (!animateOnView && hasAnimatedRef.current) {
      // Optional: If you want to reset the number to 0 when out of view, uncomment below
      // setCurrentNumber(0);
      // hasAnimatedRef.current = false; // Allow re-animation next time
    }
    // If animateOnView is false and it hasn't animated, keep currentNumber at 0 (initial state)
    // or at the target number if you previously animated and don't want it to reset.
    // For this implementation, it will stay at the last animated value if out of view and animated.
  }, [targetNumber, duration, animateOnView]); // Add animateOnView to dependencies

  // If the component is not in view when it first renders, ensure currentNumber is 0
  // until animateOnView becomes true.
  useEffect(() => {
    if (!animateOnView && !hasAnimatedRef.current) {
      setCurrentNumber(0);
    }
  }, [animateOnView]);

  return (
    <span className={className}>
      {prefix}
      {currentNumber.toLocaleString()}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;
