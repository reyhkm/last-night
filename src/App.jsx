import { useState, useRef, useEffect } from 'react';
import { lyrics } from './data/lyrics';
import LyricDisplay from './components/LyricDisplay';
import StartOverlay from './components/StartOverlay';
import LoveRain from './components/LoveRain';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const handleStart = () => {
    audioRef.current.play().then(() => {
      setHasStarted(true);
    }).catch(error => {
      console.error("Audio playback failed:", error);
      alert("Could not play audio. Please ensure the audio file is present in the /public folder and that your browser allows autoplay.");
    });
  };

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    
    if (audio) {
      audio.addEventListener('timeupdate', updateTime);
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
      };
    }
  }, [hasStarted]);

  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
      
      {hasStarted && <LoveRain />}

      <audio ref={audioRef} src="/last-night-on-earth.mp3" preload="auto"></audio>
      
      {!hasStarted ? (
        <StartOverlay onStart={handleStart} />
      ) : (
        <main className="relative z-10 flex items-center justify-center h-full animate-fade-in">
          <LyricDisplay lyrics={lyrics} currentTime={currentTime} />
        </main>
      )}
    </div>
  );
}

export default App;
