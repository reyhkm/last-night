import { PlayIcon } from './icons/PlayIcon';

const StartOverlay = ({ onStart }) => {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center animate-fade-in">
      <div className="text-center text-white p-8">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-2 text-shadow-lg animate-glow">Surat Cinta Kosmik</h1>
        <p className="text-xl md:text-2xl font-sans text-gray-300 mb-10">Sebuah Pengalaman Liris oleh Green Day</p>
        <button
          onClick={onStart}
          className="group flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-lg font-sans font-semibold text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm"
        >
          <PlayIcon />
          Mulai Perjalanan
        </button>
      </div>
    </div>
  );
};

export default StartOverlay;
