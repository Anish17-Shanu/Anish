import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const Typewriter = ({ text, speed = 100, delay = 0, className = "" }: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Start typing after delay
    const startTyping = setTimeout(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);

        return () => clearTimeout(timer);
      } else {
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, delay);

    return () => clearTimeout(startTyping);
  }, [currentIndex, text, speed, delay]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      if (currentIndex <= text.length) {
        setShowCursor(prev => !prev);
      }
    }, 500);

    return () => clearInterval(cursorTimer);
  }, [currentIndex, text.length]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className="animate-pulse text-primary">|</span>
      )}
    </span>
  );
};

export default Typewriter;