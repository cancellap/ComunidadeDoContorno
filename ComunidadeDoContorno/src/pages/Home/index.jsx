import React from "react";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import { Carrossel } from "../../components/Carrossel";

export default function Home() {
  const images = [
    "https://via.placeholder.com/600x400?text=Imagem+1",
    "https://via.placeholder.com/600x400?text=Imagem+2",
    "https://via.placeholder.com/600x400?text=Imagem+3",
  ];

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Carrossel images={images} />

        <div className={styles.cardText}>
          <div className={styles.text}>
            <h1>Bem-vindo à Página Home</h1>
            <p>
              Este é o conteúdo principal da página, centralizado e com um
              layout limpo. Insira aqui informações importantes sobre seu site,
              produto ou serviço. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Commodi nobis quaerat officiis? Deserunt
              veritatis eius nobis! Cum explicabo optio voluptas deserunt est,
              ipsam ducimus laboriosam laudantium nulla facilis nisi similique.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              perspiciatis dolor ad nobis eligendi. Sed natus porro corporis
              sunt, voluptate, inventore expedita ullam impedit ipsa laudantium
              eos, quis nihil saepe.
              Este é o conteúdo principal da página, centralizado e com um
              layout limpo. Insira aqui informações importantes sobre seu site,
              produto ou serviço. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Commodi nobis quaerat officiis? Deserunt
              veritatis eius nobis! Cum explicabo optio voluptas deserunt est,
              ipsam ducimus laboriosam laudantium nulla facilis nisi similique.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              perspiciatis dolor ad nobis eligendi. Sed natus porro corporis
              sunt, voluptate, inventore expedita ullam impedit ipsa laudantium
              eos, quis nihil saepe.
              
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
