import { useState, useEffect } from "react";
import styles from "../Page.module.css";
import LinkButton from "../../layout/linkbutton/LinkButton";

//* Página de Tarefas
//* Permite visualizar e criar novas tarefas
//* Dividida em duas seções: criar tarefa e listar tarefas cadastradas

function Tarefa() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/tarefas/findall")
      .then((res) => res.json())
      .then((data) => {
        setTarefas(Array.isArray(data) ? data : data.content || []);
      })
      .catch(() => setTarefas([]));
  }, []);

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
          {tarefas.length === 0 ? (
            <p>.</p>
          ) : (
            <ul>
              {tarefas.map((t) => (
                <li key={t.id}>
                  <strong>{t.titulo}</strong> - {t.descricao} <br></br>
                  {t.prazo && ` (Prazo: ${t.prazo})`} <br></br>
                  {t.equipe && ` (Responsável: ${t.equipe.nome})`}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

export default Tarefa;
