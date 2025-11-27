import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/logoo.png";

//* Navbar -
//* barra de navegação principal do site.
function Navbar() {
  return (
    <nav class={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Proiecte" />
        </Link>
        <ul class={styles.list}>
          <li class={styles.item}>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li class={styles.item}>
            {" "}
            <Link to="/projects">Projetos</Link>
          </li>

          <li class={styles.item}>
            {" "}
            <Link to="/company">Empresa</Link>
          </li>
          <li class={styles.item}>
            {" "}
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
