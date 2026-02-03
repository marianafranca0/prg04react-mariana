import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Form.module.css";

function TarefaForm() {
  const navigate = useNavigate();

  const [tarefa, setTarefa] = useState({
    titulo: "",
    descricao: "",
    prazo: "",
    idEquipe: "",
  });

  const [membros, setMembros] = useState([]);

  // Carregar membros da equipe para selecionar o responsável
  useEffect(() => {
    fetch("http://localhost:8080/equipes/findall")
      .then((res) => res.json())
      .then((data) => {
        setMembros(Array.isArray(data) ? data : data.content || []);
      })
      .catch(() => setMembros([]));
  }, []);

  function handleChange(e) {
    setTarefa({ ...tarefa, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8080/tarefas/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tarefa),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao cadastrar tarefa");
        }
        return res.json();
      })
      .then(() => {
        alert("Tarefa cadastrada com sucesso!");
        navigate("/dashboard/tarefas"); // volta para a lista de tarefas
      })
      .catch((err) => {
        alert("Erro: " + err.message);
      });
  }

  return (
    <div className={styles.newtask_container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="titulo"
            value={tarefa.titulo}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Descrição:</label>
          <textarea
            name="descricao"
            value={tarefa.descricao}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Prazo:</label>
          <input
            type="date"
            name="prazo"
            value={tarefa.prazo}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Responsável:</label>
          <select
            name="idEquipe"
            value={tarefa.idEquipe}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um membro</option>
            {membros.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nome} - {m.cargo}
              </option>
            ))}
          </select>
        </div>

        <input type="submit" value="Cadastrar Tarefa" className={styles.btn} />
      </form>
    </div>
  );
}

export default TarefaForm;
