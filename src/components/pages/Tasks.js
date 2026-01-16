import styles from "./Tasks.module.css";
import LinkButton from "../layout/LinkButton";

//* Página de Tarefas
//* Permite visualizar e criar novas tarefas
//* Dividida em duas seções: criar tarefa e listar tarefas cadastradas

function Tasks() {
  return (
    <div className={styles.tasks_container}>
      {/* Seção para criar tarefa */}
      <section className={styles.section}>
        <h2>Criar Tarefa</h2>
        <p>Clique no botão abaixo para cadastrar uma nova tarefa.</p>
        <div className={styles.btn_container}>
          <LinkButton to="/newtask" text="Criar tarefa"></LinkButton>
        </div>
      </section>

      {/* Seção para visualizar tarefas cadastradas */}
      <section className={styles.section}>
        <h2>Tarefas Cadastradas</h2>
        <p>Visualize todas as tarefas cadastradas no sistema.</p>
        <div className={styles.tasks_list}>
          <p>Nenhuma tarefa cadastrada ainda.</p>
        </div>
      </section>
    </div>
  );
}

export default Tasks;
