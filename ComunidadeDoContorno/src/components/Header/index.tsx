import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.container}>
      <div className={style.navBar}>
        <Link className={style.option} to={"/"}>Home</Link>
        <Link className={style.option} to={"/Referencias"}>Referencias</Link>
        <Link className={style.option} to={"/LinhaDoTempo"}>Linha do Tempo</Link>
      </div>
    </div>
  );
}

export default Header;
