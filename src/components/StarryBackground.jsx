const StarryBackground = () => {
  const starCount = 100;
  const stars = [];

  for (let i = 0; i < starCount; i++) {
    const style = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${Math.random() * 2 + 3}s`,
    };
    stars.push(<div key={i} className="absolute bg-starlight-gold rounded-full animate-twinkle" style={style} />);
  }

  return <div className="absolute inset-0 z-0">{stars}</div>;
};

export default StarryBackground;
