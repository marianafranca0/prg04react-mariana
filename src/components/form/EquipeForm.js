import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../form/Input";
import Select from "../form/Select";
import { useEffect } from "react";
import styles from "./Form.module.css";
function EquipeForm() {
  const navigate = useNavigate();
  const [equipe, setEquipe] = useState({
    nome: "",
    cargo: "",
    idProjeto: "",
  });

  const [projetos, setProjetos] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  {
    /* Carregar projetos cadastrados */
  }

  useEffect(() => {
    fetch("http://localhost:8080/projetos/findall")
      .then((res) => res.json())
      .then((data) => {
        setProjetos(Array.isArray(data) ? data : data.content || []);
      })
      .catch(() => setProjetos([]));
  }, []);

  function handleChange(e) {
    setEquipe({ ...equipe, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8080/equipes/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(equipe),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao cadastrar equipe");
        }
        return res.json();
      })
      .then(() => {
        alert("Equipe cadastrada com sucesso!");
        navigate("/dashboard/equipe"); // volta para a lista de equipes
      })
      .catch((err) => {
        alert("Erro: " + err.message);
      });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Campo nome do membro */}
      <Input
        type="text"
        text="Nome do membro"
        name="nome"
        placeholder="Insira o nome do membro da equipe"
        onChange={(e) => setEquipe({ ...equipe, nome: e.target.value })}
      />

      {/* Campo cargo */}
      <Input
        type="text"
        text="Cargo"
        name="cargo"
        placeholder="Insira o cargo do membro"
        onChange={(e) => setEquipe({ ...equipe, cargo: e.target.value })}
      />

      {/* Campo que seleciona o projeto já cadastrado */}
      <Select
        text="Selecione o projeto:"
        name="idProjeto"
        options={projetos} // lista vinda do back-end
        value={equipe.idProjeto}
        handleOnChange={(e) =>
          setEquipe({ ...equipe, idProjeto: e.target.value })
        }
      />

      <div>
        <input className={styles.btn} type="submit" value="Cadastrar Membro" />
      </div>

      {mensagem && <p className={styles.sucesso}>{mensagem}</p>}
      {erro && <p className={styles.erro}>{erro}</p>}
    </form>
  );
}
export default EquipeForm;
