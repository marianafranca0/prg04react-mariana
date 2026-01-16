import styles from "./Home.module.css";
import LinkButton from "../layout/LinkButton";

//* página HOME
function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Proiecte</span>{" "}
      </h1>
      <p>Comece nesse instante a gerenciar os seus projetos!</p>

      <div className={styles.btn_container}>
        <LinkButton to="/newclient" text="Cadastre-se aqui"></LinkButton>
      </div>
    </section>
  );
}

export default Home;
