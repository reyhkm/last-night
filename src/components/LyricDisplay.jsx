const LyricDisplay = ({ lyrics, currentTime }) => {
  const activeIndex = lyrics.findIndex(
    (line) => currentTime >= line.start && currentTime <= line.end
  );

  const activeLine = activeIndex !== -1 ? lyrics[activeIndex] : null;

  return (
    <div className="h-full w-full max-w-5xl flex flex-col justify-center font-serif text-center p-8">
      <div className="h-64 flex flex-col items-center justify-center">
        {activeLine && (
          <div key={activeIndex} className="w-full">
            {activeLine.note && (
              <p className="animate-note-entrance text-lg md:text-xl font-sans text-gray-300 mb-6 italic">
                {activeLine.note}
              </p>
            )}
            <p
              className={`
                animate-lyric-entrance text-4xl md:text-6xl font-bold text-white
                ${
                  activeLine.isInstrumental
                    ? 'italic text-gray-300 text-3xl md:text-4xl'
                    : 'animate-glow'
                }
              `}
            >
              {activeLine.text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LyricDisplay;
