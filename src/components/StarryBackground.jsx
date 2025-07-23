import { useMemo } from 'react';

const StarryBackground = () => {
  const starCount = 100; // Jumlah bintang latar belakang acak
  const heartStarCount = 35; // Jumlah bintang untuk bentuk hati
  const jStarCount = 30; // Jumlah bintang untuk bentuk huruf J

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
    const heartOffsetY = 5; // Mengatur posisi hati lebih ke atas

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

    // --- Tambahkan bintang berbentuk huruf j (lowercase 'j') ---
    const jShapePoints = [];

    // Parameters for j shape position and scale
    const jScaleX = 20; // Percentage width of viewport for j's bounding box
    const jScaleY = 30; // Percentage height of viewport for j's bounding box
    // Position below the heart, roughly centered horizontally
    const jOffsetX = 50 - jScaleX / 2; // Center horizontally with heart
    const jOffsetY = heartOffsetY + heartScaleY + 15; // Posisi j sedikit lebih ke bawah dari hati

    // Dot of j
    const dotNumPoints = 1;
    jShapePoints.push({ x: 0.5, y: 0.05 }); // Dot position relative to j's bounding box

    // Main body of j (cubic bezier curve for a connected, elegant feel)
    const bodyNumPoints = jStarCount - dotNumPoints;
    const p0_body = { x: 0.5, y: 0.15 }; // Start of body (below dot)
    const p_c1_body = { x: 0.5, y: 0.4 }; // Control point 1: pulls straight down then slight curve
    const p_c2_body = { x: 0.1, y: 0.8 }; // Control point 2: pulls far left for the loop
    const p3_body = { x: 0.6, y: 0.7 }; // End of hook, slightly upwards and right

    for (let i = 0; i < bodyNumPoints; i++) {
      const t = i / (bodyNumPoints - 1);
      const x =
        Math.pow(1 - t, 3) * p0_body.x +
        3 * Math.pow(1 - t, 2) * t * p_c1_body.x +
        3 * (1 - t) * Math.pow(t, 2) * p_c2_body.x +
        Math.pow(t, 3) * p3_body.x;
      const y =
        Math.pow(1 - t, 3) * p0_body.y +
        3 * Math.pow(1 - t, 2) * t * p_c1_body.y +
        3 * (1 - t) * Math.pow(t, 2) * p_c2_body.y +
        Math.pow(t, 3) * p3_body.y;
      jShapePoints.push({ x, y });
    }

    // Hasilkan bintang-bintang berbentuk huruf j
    jShapePoints.forEach((point, index) => {
      const style = {
        left: `${point.x * jScaleX + jOffsetX}%`,
        top: `${point.y * jScaleY + jOffsetY}%`,
        width: `${Math.random() * 3 + 2}px`, // j stars slightly larger
        height: `${Math.random() * 3 + 2}px`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${Math.random() * 3 + 3}s`,
      };
      starElements.push(<div key={`j-star-${index}`} className="absolute bg-starlight-gold rounded-full animate-twinkle" style={style} />);
    });

    return starElements;
  }, []); // Array dependensi kosong memastikan ini hanya berjalan sekali

  return <div className="absolute inset-0 z-0">{stars}</div>;
};

export default StarryBackground;
