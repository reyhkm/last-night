import { useMemo } from 'react';

const StarryBackground = () => {
  const starCount = 100; // Jumlah bintang latar belakang acak
  const heartStarCount = 35; // Jumlah bintang untuk bentuk hati

  const stars = useMemo(() => {
    const starElements = [];

    // Hasilkan bintang latar belakang acak
    for (let i = 0; i < starCount; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 2}s`,
      };
      starElements.push(<div key={`bg-star-${i}`} className="absolute bg-starlight-gold rounded-full animate-twinkle" style={style} />);
    }

    // Fungsi untuk menghasilkan titik-titik bentuk hati menggunakan persamaan parametrik
    const generateHeartPoints = (numPoints, scaleX, scaleY, offsetX, offsetY) => {
      const points = [];
      for (let i = 0; i < numPoints; i++) {
        const t = (i / numPoints) * 2 * Math.PI;
        // Persamaan parametrik untuk bentuk hati
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

        // Normalisasi x dari [-16, 16] ke [0, 1]
        const normalizedX = (x + 16) / 32;
        // Normalisasi y dari [-18, 6] ke [0, 1]
        const normalizedY = (y + 18) / 24;

        points.push({
          x: normalizedX * scaleX + offsetX,
          y: (1 - normalizedY) * scaleY + offsetY // Inversi Y karena 'top' CSS bertambah ke bawah
        });
      }
      return points;
    };

    // Parameter untuk posisi dan skala bentuk hati
    const heartScaleX = 30; // Persentase lebar viewport
    const heartScaleY = 30; // Persentase tinggi viewport
    const heartOffsetX = 50 - heartScaleX / 2; // Pusatkan secara horizontal
    const heartOffsetY = 50 - heartScaleY / 2; // Pusatkan secara vertikal

    const heartPoints = generateHeartPoints(heartStarCount, heartScaleX, heartScaleY, heartOffsetX, heartOffsetY);

    // Hasilkan bintang-bintang berbentuk hati
    heartPoints.forEach((point, index) => {
      const style = {
        left: `${point.x}%`,
        top: `${point.y}%`,
        width: `${Math.random() * 3 + 2}px`, // Bintang hati sedikit lebih besar
        height: `${Math.random() * 3 + 2}px`,
        animationDelay: `${Math.random() * 4}s`, // Rentang delay yang berbeda
        animationDuration: `${Math.random() * 3 + 3}s`, // Rentang durasi yang berbeda
      };
      starElements.push(<div key={`heart-star-${index}`} className="absolute bg-starlight-gold rounded-full animate-twinkle" style={style} />);
    });

    return starElements;
  }, []); // Array dependensi kosong memastikan ini hanya berjalan sekali

  return <div className="absolute inset-0 z-0">{stars}</div>;
};

export default StarryBackground;
