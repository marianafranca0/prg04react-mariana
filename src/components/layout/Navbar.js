import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/logoo.png";

//* Navbar -
//* barra de navegação principal do site.
function Navbar() {
  return (
    <nav>
      <Container>
        <Link to="/">
          <img src={logo} alt="Proiecte" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </Container>
    </nav>
  );
}

export default Navbar;
