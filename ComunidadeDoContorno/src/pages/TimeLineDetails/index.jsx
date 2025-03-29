// pages/TimeLineDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./TimeLineDetails.module.css";
import { timelineItems } from "../../assets/DataTimeLineDetails";

const TimeLineDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = timelineItems.find((item) => item.id === parseInt(id));

  if (!item) {
    return (
      <div>
        <Header />
        <div className={styles.notFound}>Item não encontrado</div>
      </div>
    );
  }

  const images = [];
  if (item.image1) images.push(item.image1);
  if (item.image1) images.push(item.image2);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          &larr; Voltar à Linha do Tempo
        </button>

        <div className={styles.header}>
          <h1 className={styles.year}>{item.year}</h1>
          <h2 className={styles.title}>{item.title || item.description}</h2>
        </div>

        <div className={styles.content}>
          <p className={styles.description}>{item.longDescription}</p>

          {images.length > 0 && (
            <div className={styles.gallery}>
              {/* <h3>Registros Históricos</h3> */}
              <div className={styles.images}>
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Registro histórico ${index + 1}`}
                    className={styles.image}
                  />
                ))}
              </div>
              <a
                href={item.driveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mais informações
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLineDetails;
