import React from "react";
import styles from "./TelaDeConstrucao.module.css";
import { MdEmail, MdConstruction } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const EmConstrucao = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <MdConstruction className={styles.constructionIcon} />
          <h1 className={styles.title}>Página em Construção</h1>
          <p className={styles.description}>
            Esta pagina esta em construção, em breve estará disponível.
          </p>
        </div>

        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div className={styles.progress}></div>
          </div>
          <span>65% concluído</span>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.emailContact}>
            <MdEmail />
            <span>contato@seusite.com</span>
          </div>

          <button className={styles.button} onClick={handleGoHome}>
            Voltar à Página Inicial
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmConstrucao;
