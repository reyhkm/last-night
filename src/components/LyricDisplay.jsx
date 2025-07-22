const LyricDisplay = ({ lyrics, currentTime }) => {
  const activeIndex = lyrics.findIndex(
    (line) => currentTime >= line.start && currentTime <= line.end
  );

  const activeLine = activeIndex !== -1 ? lyrics[activeIndex] : null;

  return (
    <div className="h-full w-full max-w-4xl flex flex-col justify-center font-serif text-center overflow-hidden p-8">
      {/* This inner div provides a stable height for the lyric to appear in, preventing layout shifts. */}
      <div className="h-48 flex items-center justify-center">
        {activeLine && (
          <p
            // The key is crucial. When it changes, React unmounts the old
            // paragraph and mounts a new one, which re-triggers the animation.
            key={activeIndex}
            className={`
              text-4xl md:text-5xl font-bold text-white animate-lyric-focus-in
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
