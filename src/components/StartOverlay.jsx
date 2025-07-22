import { PlayIcon } from './icons/PlayIcon';

const StartOverlay = ({ onStart }) => {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center animate-fade-in">
      <div className="text-center text-white p-8 bg-black/20 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2">Last Night on Earth</h1>
        <p className="text-xl md:text-2xl font-sans text-gray-300 mb-8">Green Day</p>
        <button
          onClick={onStart}
          className="group flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-lg font-sans font-semibold text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
        >
          <PlayIcon />
          Click to Start
        </button>
      </div>
    </div>
  );
};

export default StartOverlay;
