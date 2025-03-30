import React from "react";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import { Carrossel } from "../../components/Carrossel";

export default function Home() {
  const images = [
    "https://i.ibb.co/H00VB2K/E7e3e048-94ba-4dfe-a056-2916e7e6bd94.jpg",
    "https://i.ibb.co/TMvwfqRs/a7ba0154-5963-4f3b-9731-4b39d7232257.jpg",
    "https://i.ibb.co/KjPnZpL3/850a6623-afba-4932-a1fd-ee31af57bcd6.jpg"
  ];

  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.main}>
        <div className={styles.gridContainer}>
          <div className={styles.carouselColumn}>
            <Carrossel images={images} />
          </div>

          <div className={styles.textColumn}>
            <div className={styles.textContent}>
              <h1> Comunidade do Contorno</h1>
              <p>
                A Comunidade do Contorno, localizada na altura do km 82 na
                rodovia BR-040, tem seu histórico de formação ainda no século
                XIX com a chegada de migrantes no local. A comunidade é uma
                referência quando se trata de mobilização e luta pela garantia
                de seus direitos, sempre se organizando e unindo para defender
                seu território e seus direitos. As memórias de luta da
                comunidade estão organizadas nesse site a fim de mantê-las vivas
                e inspirar outros grupos a seguir lutando pela construção de
                políticas públicas de maneira coletiva, que busque inserir a
                população no planejamento, desenvolvimento e identificação de
                problemas.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
