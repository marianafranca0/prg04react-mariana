import { Link, Outlet } from "react-router-dom";
import styles from "./Dashboard.module.css";

//* Componente Dashboard que serve como layout para páginas filhas.
function Dashboard() {
  return (
    <div className={styles.dashboard}>
      {/* menu lateral */}
      <nav className={styles.sidebar}>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to="projetos">Projetos</Link>
          </li>
          <li>
            <Link to="equipe">Equipe</Link>
          </li>
          <li>
            <Link to="tarefas">Tarefas</Link>
          </li>
          <li>
            <Link to="servicos">Serviços</Link>
          </li>
        </ul>
      </nav>

      {/* área principal */}
      <main className={styles.content}>
        <Outlet /> {/*paginas filhas*/}
      </main>
    </div>
  );
}

export default Dashboard;
