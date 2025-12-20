import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/logoo.png";

//* Navbar -
//* barra de navegação principal do site.
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Proiecte" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            {" "}
            <Link to="/">Home</Link>
          </li>

          <li className={styles.item}>
            {" "}
            <Link to="/newclient">Login</Link>
          </li>

          <li className={styles.item}>
            {" "}
            <Link to="/projects">Projetos</Link>
          </li>

          <li className={styles.item}>
            {" "}
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            {" "}
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
