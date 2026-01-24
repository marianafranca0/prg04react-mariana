import styles from "./Page.module.css";
import LinkButton from "../layout/LinkButton";

//* Página de Tarefas
//* Permite visualizar e criar novas tarefas
//* Dividida em duas seções: criar tarefa e listar tarefas cadastradas

function Tarefa() {
  return (
    <div className={styles.container}>
      {/* Seção para criar tarefa */}
      <section className={styles.section}>
        <h2>Criar Tarefa</h2>
        <p>Crie uma nova tarefa:</p>
        <div className={styles.btn_container}>
          <LinkButton to="/newtarefa" text="Criar tarefa"></LinkButton>
        </div>
      </section>

      {/* Seção para visualizar tarefas cadastradas */}
      <section className={styles.section}>
        <h2>Tarefas Cadastradas</h2>
        <div className={styles.list}>
          <p>Nenhuma tarefa cadastrada ainda.</p>
        </div>
      </section>
    </div>
  );
}

export default Tarefa;
