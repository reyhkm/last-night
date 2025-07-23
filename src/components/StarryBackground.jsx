import { useMemo } from 'react';

const StarryBackground = () => {
  const starCount = 100; // Jumlah bintang latar belakang acak
  const heartStarCount = 35; // Jumlah bintang untuk bentuk hati
  const rjStarCount = 45; // Jumlah bintang untuk bentuk huruf R.J

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
    const heartOffsetY = 10; // Mengatur posisi hati lebih ke atas

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

    // --- Tambahkan bintang berbentuk huruf R.J ---
    const rjShapePoints = [];

    // Helper functions for generating points
    const generatePointsOnLine = (p1, p2, count) => {
        const points = [];
        for (let i = 0; i < count; i++) {
            const t = count === 1 ? 0.5 : i / (count - 1); // Handle single point case
            points.push({ x: p1.x * (1 - t) + p2.x * t, y: p1.y * (1 - t) + p2.y * t });
        }
        return points;
    };

    const generatePointsOnQuadBezier = (p0, p1, p2, count) => {
        const points = [];
        for (let i = 0; i < count; i++) {
            const t = count === 1 ? 0.5 : i / (count - 1); // Handle single point case
            const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
            const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
            points.push({ x, y });
        }
        return points;
    };

    // Parameters for R.J group position and scale
    const rjGroupScaleX = 45; // Percentage width of viewport for R.J's bounding box
    const rjGroupScaleY = 30; // Percentage height of viewport for R.J's bounding box
    const rjGroupOffsetX = 50 - rjGroupScaleX / 2; // Center horizontally
    const rjGroupOffsetY = heartOffsetY + heartScaleY + 8; // Below the heart

    // --- Generate 'R' points ---
    const rCharRelativeX = 0; // R starts at the beginning of the group's X space
    const rCharRelativeWidth = 0.4; // R takes 40% of the group's width
    const rCharRelativeHeight = 1; // R takes full height of the group

    const rPoints = [
        ...generatePointsOnLine({x:0.1, y:0.1}, {x:0.1, y:0.9}, 6), // Stem
        ...generatePointsOnQuadBezier({x:0.1, y:0.1}, {x:0.7, y:0.1}, {x:0.7, y:0.5}, 6), // Top curve
        ...generatePointsOnLine({x:0.3, y:0.5}, {x:0.7, y:0.9}, 6) // Leg
    ];

    rPoints.forEach(p => {
        rjShapePoints.push({
            x: rCharRelativeX + p.x * rCharRelativeWidth,
            y: p.y * rCharRelativeHeight
        });
    });

    // --- Generate '.' point ---
    const dotCharRelativeX = rCharRelativeX + rCharRelativeWidth + 0.02; // After R, small gap
    const dotCharRelativeWidth = 0.05;
    const dotCharRelativeHeight = 0.1; // Dot is small
    const dotCharRelativeY = 0.7; // Position dot lower

    rjShapePoints.push({
        x: dotCharRelativeX + 0.5 * dotCharRelativeWidth, // Center of dot
        y: dotCharRelativeY + 0.5 * dotCharRelativeHeight
    });

    // --- Generate 'J' points ---
    const jCharRelativeX = dotCharRelativeX + dotCharRelativeWidth + 0.02; // After dot, small gap
    const jCharRelativeWidth = 0.4;
    const jCharRelativeHeight = 1;

    const jPoints = [
        ...generatePointsOnLine({x:0.1, y:0.1}, {x:0.9, y:0.1}, 6), // Top bar
        ...generatePointsOnLine({x:0.5, y:0.1}, {x:0.5, y:0.7}, 6), // Stem
        ...generatePointsOnQuadBezier({x:0.5, y:0.7}, {x:0.7, y:0.9}, {x:0.3, y:0.9}, 6) // Hook
    ];

    jPoints.forEach(p => {
        rjShapePoints.push({
            x: jCharRelativeX + p.x * jCharRelativeWidth,
            y: p.y * jCharRelativeHeight
        });
    });

    // Distribute rjStarCount among the generated points, or add random ones if needed
    const totalGeneratedPoints = rjShapePoints.length;
    const randomStarsToAdd = rjStarCount - totalGeneratedPoints;

    for (let i = 0; i < randomStarsToAdd; i++) {
        rjShapePoints.push({
            x: Math.random(), // Random within 0-1 of group
            y: Math.random()
        });
    }

    // Hasilkan bintang-bintang berbentuk R.J
    rjShapePoints.forEach((point, index) => {
      const style = {
        left: `${point.x * rjGroupScaleX + rjGroupOffsetX}%`,
        top: `${point.y * rjGroupScaleY + rjGroupOffsetY}%`,
        width: `${Math.random() * 3 + 2}px`, // R.J stars slightly larger
        height: `${Math.random() * 3 + 2}px`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${Math.random() * 3 + 3}s`,
      };
      starElements.push(<div key={`rj-star-${index}`} className="absolute bg-starlight-gold rounded-full animate-twinkle" style={style} />);
    });

    return starElements;
  }, []); // Array dependensi kosong memastikan ini hanya berjalan sekali

  return <div className="absolute inset-0 z-0">{stars}</div>;
};

export default StarryBackground;
