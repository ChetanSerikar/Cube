import React, { useState, useEffect } from "react";
interface Product {
  id: number;
  thumbnail: string;
}

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=9&skip=${
            Math.floor(Math.random() * (99 - 11 + 1)) + 11
          }&select=thumbnail`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPhotos(data.products.map((prod: Product) => prod.thumbnail));
      } catch (e) {
        setError(e instanceof Error ? e.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Grid photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;
