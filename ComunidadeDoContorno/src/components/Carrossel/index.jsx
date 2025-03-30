import React, { useState, useEffect } from "react";
import styles from "./Carrossel.module.css";

export const Carrossel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContent}>
        <button
          onClick={prevSlide}
          className={`${styles.button} ${styles.prev}`}
          aria-label="Imagem anterior"
        >
          &lt;
        </button>

        <div className={styles.imageContainer}>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`} // Descrição mais acessível
            className={styles.carouselImage}
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/800x400?text=Imagem+não+carregada";
            }}
            loading="lazy" // Otimização de carregamento
          />
        </div>

        <button
          onClick={nextSlide}
          className={`${styles.button} ${styles.next}`}
          aria-label="Próxima imagem"
        >
          &gt;
        </button>
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};