import flor from "../assets/images/img-flor.jpg";

//* componente Nav
export default function Nav() {
  return (
    <nav id="menu">
      <figure>
        <img src={flor} alt="logo-flor" className="img-flor" />
      </figure>
      <ul>
        <li>
          <a href="mmmmm">Página 1</a>
        </li>
        <li>
          <a href="mmmmm">Página 2</a>
        </li>
        <li>
          <a href="mmmmm">Página 3</a>
        </li>
      </ul>
      <a href="login.html" className="btn">
        Login
      </a>
    </nav>
  );
}
