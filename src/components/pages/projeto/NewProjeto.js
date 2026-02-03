import ProjectForm from "../../form/projeto/ProjectForm";
import styles from "../New.module.css";

//* Página de criação de projetos que contém o formulário de projeto.
function NewProjeto() {
  return (
    <div className={styles.new_container}>
      <ProjectForm />
    </div>
  );
}

export default NewProjeto;
