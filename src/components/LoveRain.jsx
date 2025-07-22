const LoveRain = () => {
  const hearts = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, index) => (
        <div
          key={index}
          className="absolute text-red-400 animate-fall"
          style={{
            left: `${Math.random() * 100}vw`,
            fontSize: `${Math.random() * 1.5 + 0.5}rem`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            opacity: 0,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default LoveRain;
