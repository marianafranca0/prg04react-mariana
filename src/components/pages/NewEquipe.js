import styles from "./New.module.css";
import EquipeForm from "../form/EquipeForm";

//* Página de criação de equipes que contém o formulário de equipe.
function NewEquipe() {
  return (
    <div className={styles.new_container}>
      <EquipeForm />
    </div>
  );
}

export default NewEquipe;
