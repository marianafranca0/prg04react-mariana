import styles from "./Home.module.css";
import LinkButton from "../../layout/linkbutton/LinkButton";
import growthImg from "../../../img/growth-improve-productivity-svgrepo-com.svg";

//* página HOME
function Home() {
  return (
    <section className={styles.home_container}>
      <div className={styles.content}>
        <div className={styles.text_content}>
          <h1>
            Software para <br /> Gestão de Projetos
          </h1>
          <p>Gerencie projetos, tarefas e equipes no Proiecte.</p>
        </div>
        <div className={styles.image_content}>
          <img src={growthImg} alt="Growth Improve" />
        </div>
      </div>
    </section>
  );
}

export default Home;
