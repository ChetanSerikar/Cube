import React, { useState, useEffect } from "react";

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      fetch(
        `https://dummyjson.com/products?limit=9&skip=${
          Math.floor(Math.random() * 8 + 2) * 10
        }&select=thumbnail`
      )
        .then((res) => res.json())
        // .then((data) => console.log(data.products));
        .then((data) =>
          setPhotos(data.products.map((prod, i) => prod.thumbnail))
        );
    };

    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Grid photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;
