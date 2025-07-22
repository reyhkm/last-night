const animations = [
  'animate-lyric-swoop-in',
  'animate-lyric-gentle-sway',
  'animate-lyric-fade-up',
  'animate-lyric-zoom-in',
];

const LyricDisplay = ({ lyrics, currentTime }) => {
  const activeIndex = lyrics.findIndex(
    (line) => currentTime >= line.start && currentTime <= line.end
  );

  const activeLine = activeIndex !== -1 ? lyrics[activeIndex] : null;

  const animationClass = activeIndex !== -1 ? animations[activeIndex % animations.length] : '';

  return (
    <div className="h-full w-full max-w-4xl flex flex-col justify-center font-serif text-center overflow-hidden p-8">
      <div className="h-48 flex items-center justify-center">
        {activeLine && (
          <p
            key={activeIndex}
            className={`
              text-4xl md:text-5xl font-bold text-white
              ${animationClass}
              ${
                activeLine.isInstrumental
                  ? 'italic text-gray-400 text-3xl md:text-4xl'
                  : 'animate-glow'
              }
            `}
          >
            {activeLine.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default LyricDisplay;
