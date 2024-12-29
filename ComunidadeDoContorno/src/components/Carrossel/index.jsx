import React, { useState, useEffect } from "react";
import styles from "./Carrossel.module.css"; // Importando o CSS Module

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
    const interval = setInterval(nextSlide, 3000); // Troca a imagem a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContent}>
        <button onClick={prevSlide} className={`${styles.button} ${styles.prev}`}>
          &lt;
        </button>
        <img src={images[currentIndex]} alt="Carrossel" />
        <button onClick={nextSlide} className={`${styles.button} ${styles.next}`}>
          &gt;
        </button>
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};
