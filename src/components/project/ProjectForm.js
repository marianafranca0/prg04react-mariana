import { useState, useEffect } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import styles from "./ProjectForm.module.css";

//* Formulário que coleta dados do projeto
function ProjectForm() {
  const [clientes, setClientes] = useState([]);
  const [projeto, setProjeto] = useState({
    nome: "",
    descricao: "",
    idCliente: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/clientes")
      .then((res) => res.json())
      .then((data) => setClientes(data))
      .catch((err) => console.error("Erro ao carregar clientes:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const projetoTrimmed = {
      nome: projeto.nome.trim(),
      descricao: projeto.descricao.trim(),
      idCliente: projeto.idCliente,
    };

    if (!projetoTrimmed.nome || !projetoTrimmed.descricao) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    fetch("http://localhost:8080/projetos/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projetoTrimmed),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("erro ao criar projeto");
        }
        return res.json();
      })
      .then((data) => {
        setMensagem(`Projeto ${data.nome} criado com sucesso!`);
        setErro("");
      })
      .catch((err) => {
        setErro(err.message);
        setMensagem("");
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Componente Input que utiliza props */}
      {/* Campo nome */}
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        onChange={(e) => setProjeto({ ...projeto, nome: e.target.value })}
      />

      {/* Campo descricao */}
      <Input
        type="text"
        text="Descrição do projeto"
        name="name"
        placeholder="Insira a descrição do Projeto"
        onChange={(e) => setProjeto({ ...projeto, descricao: e.target.value })}
      />
      {/*  <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      /> */}

      {/* Campo que seleciona o cliente já cadastrado*/}
      <Select
        text="Selecione o cliente"
        name="idCliente"
        options={clientes}
        value={projeto.idCliente}
        handleOnChange={(e) =>
          setProjeto({ ...projeto, idCliente: e.target.value })
        }
      />

      <div>
        <input className={styles.btn} type="submit" value="Criar Projeto" />
      </div>

      {mensagem && <p className={styles.sucesso}>{mensagem}</p>}
      {erro && <p className={styles.erro}>{erro}</p>}
    </form>
  );
}

export default ProjectForm;
