import { useState } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={style.container}>
      <div className={style.navBar}>
        <button className={style.menuButton} onClick={toggleMenu}>
          <div className={`${style.menuIcon} ${menuOpen ? style.open : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={style.desktopMenu}>
          <Link className={style.option} to={"/"}>Home</Link>
          <Link className={style.option} to={"/Referencias"}>Referencias</Link>
          <Link className={style.option} to={"/LinhaDoTempo"}>Linha do Tempo</Link>
        </div>

        <div className={`${style.mobileMenu} ${menuOpen ? style.open : ""}`}>
          <Link className={style.option} to={"/"} onClick={toggleMenu}>Home</Link>
          <Link className={style.option} to={"/Referencias"} onClick={toggleMenu}>Referencias</Link>
          <Link className={style.option} to={"/LinhaDoTempo"} onClick={toggleMenu}>Linha do Tempo</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;