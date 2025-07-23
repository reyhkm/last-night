import { useState, useRef, useEffect } from 'react';
import { lyrics } from './data/lyrics';
import LyricDisplay from './components/LyricDisplay';
import StartOverlay from './components/StartOverlay';
import StarryBackground from './components/StarryBackground';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0); // State baru untuk durasi audio
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

    const handleLoadedMetadata = () => {
      setAudioDuration(audio.duration);
    };

    const updateTime = () => {
      setCurrentTime(audio.currentTime);

      // Logika fade out
      const fadeOutDuration = 5; // Durasi fade out dalam detik
      if (audioDuration > 0 && audio.currentTime > audioDuration - fadeOutDuration) {
        const remainingTime = audioDuration - audio.currentTime;
        const newVolume = Math.max(0, remainingTime / fadeOutDuration); // Volume dari 1 ke 0
        audio.volume = newVolume;
      } else if (audio.volume !== 1) {
        // Pastikan volume kembali ke 1 jika tidak dalam zona fade out
        audio.volume = 1;
      }
    };
    
    if (audio) {
      audio.addEventListener('loadedmetadata', handleLoadedMetadata); // Dengarkan saat metadata dimuat
      audio.addEventListener('timeupdate', updateTime);
      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('timeupdate', updateTime);
      };
    }
  }, [hasStarted, audioDuration]); // Tambahkan audioDuration ke dependency array

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <StarryBackground />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      <audio ref={audioRef} src="/last-night-on-earth.mp3" preload="auto"></audio>
      
      {!hasStarted ? (
        <StartOverlay onStart={handleStart} />
      ) : (
        <main className="relative z-10 flex items-center justify-center h-full">
          <LyricDisplay lyrics={lyrics} currentTime={currentTime} />
        </main>
      )}
    </div>
  );
}

export default App;
