import styles from "./Home.module.css";
import host from "../../img/growth-improve-productivity-svgrepo-com.svg";
import LinkButton from "../layout/LinkButton";

//* página HOME
function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Proiecte</span>{" "}
      </h1>
      <p>Comece nesse instante a gerenciar os seus projetos!</p>
      <LinkButton to="/newproject" text="Criar Projeto"></LinkButton>
      <img src={host} alt="Proiecte" />
    </section>
  );
}

export default Home;
