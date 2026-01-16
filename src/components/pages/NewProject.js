import ProjectForm from "../form/ProjectForm";
import styles from "./New.module.css";

import projeto from "../../img/projeto (2).png";

//* Página de criação de projetos
function NewProject() {
  return (
    <div className={styles.new_container}>
      <img src={projeto} alt="seta" />
      <ProjectForm />
    </div>
  );
}

export default NewProject;
