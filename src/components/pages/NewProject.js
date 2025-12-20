import ProjectForm from "../project/ProjectForm";
import styles from "./New.module.css";

//* Página de criação de projetos
function NewProject() {
  return (
    <div className={styles.new_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm />
    </div>
  );
}

export default NewProject;
