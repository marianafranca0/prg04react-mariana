import LinkButton from "../layout/LinkButton";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.projects_container}>
      {/* Seção para criar projeto */}
      <section className={styles.section}>
        <h2>Criar Projeto</h2>
        <p>Clique no botão abaixo para cadastrar um novo projeto.</p>
        <div className={styles.btn_container}>
          <LinkButton to="/newproject" text="Criar projeto"></LinkButton>
        </div>
      </section>

      {/* Seção para visualizar projetos */}
      <section className={styles.section}>
        <h2>Projetos Cadastrados</h2>
        <p>Visualize todos os projetos cadastrados no sistema.</p>
        <div className={styles.projects_list}>
          <p>Nenhum projeto cadastrado ainda.</p>
        </div>
      </section>
    </div>
  );
}

export default Projects;
