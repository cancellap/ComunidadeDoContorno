import EmConstrucao from "../../components/EmConstrução/EmConstrucao";
import Header from "../../components/Header";
import styles from "./referencias.module.css";

export default function Referencias() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <EmConstrucao />
      </div>
    </div>
  );
}
