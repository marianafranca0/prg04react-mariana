import { Link } from "react-router-dom";
import Container from "../container/Container";
import styles from "./Navbar.module.css";
import logo from "../../../img/logoo.png";

//* Navbar -
//* barra de navegação do site.
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Proiecte" />
          <span className={styles.brandName}>Proiecte</span>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/newclient" className={styles.loginBtn}>
              Login
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
