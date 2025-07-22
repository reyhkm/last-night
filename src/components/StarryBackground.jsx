import { useMemo } from 'react';

const StarryBackground = () => {
  const starCount = 100;

  const stars = useMemo(() => {
    const starElements = [];
    for (let i = 0; i < starCount; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        opacity: Math.random() * 0.6 + 0.2,
      };
      starElements.push(<div key={i} className="absolute bg-starlight-gold rounded-full" style={style} />);
    }
    return starElements;
  }, []); // Empty dependency array ensures this runs only once

  return <div className="absolute inset-0 z-0">{stars}</div>;
};

export default StarryBackground;
