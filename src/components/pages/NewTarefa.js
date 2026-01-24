import styles from "./New.module.css";
import TarefaForm from "../form/TarefaForm";

//* Página de criação de tarefas que contém o formulário de tarefa.
function NewTarefa() {
  return (
    <div className={styles.new_container}>
      <TarefaForm />
    </div>
  );
}

export default NewTarefa;
