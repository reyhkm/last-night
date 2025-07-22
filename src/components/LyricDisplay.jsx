import { useEffect, useRef } from 'react';

const LyricDisplay = ({ lyrics, currentTime }) => {
  const activeLyricRef = useRef(null);

  const activeIndex = lyrics.findIndex(
    (line) => currentTime >= line.start && currentTime <= line.end
  );

  useEffect(() => {
    if (activeLyricRef.current) {
      activeLyricRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeIndex]);

  return (
    <div className="h-full w-full max-w-4xl flex flex-col justify-center font-serif text-center overflow-hidden p-8">
      <div className="w-full">
        {lyrics.map((line, index) => {
          const isActive = index === activeIndex;
          return (
            <p
              key={index}
              ref={isActive ? activeLyricRef : null}
              className={`
                transition-all duration-700 ease-in-out
                ${isActive
                  ? 'text-4xl md:text-5xl font-bold text-white animate-glow'
                  : 'text-2xl md:text-3xl text-gray-400'
                }
                ${line.isInstrumental ? 'italic text-gray-500' : ''}
              `}
              style={{
                margin: '2rem 0',
                opacity: isActive ? 1 : 0.5,
                transform: isActive ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {line.text}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default LyricDisplay;
