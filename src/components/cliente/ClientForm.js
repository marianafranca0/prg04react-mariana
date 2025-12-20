import { useState } from "react";
import Input from "../form/Input";
import styles from "./ClientForm.module.css";

//* Formulário que coleta dados do cliente

function ClientForm() {
  const [cliente, setCliente] = useState({
    nome: "",
    cnpj: "",
    email: "",
    telefone: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const clienteTrimmed = {
      nome: cliente.nome.trim(),
      cnpj: cliente.cnpj.trim(),
      email: cliente.email.trim(),
      telefone: cliente.telefone.trim(),
    };

    if (
      !clienteTrimmed.nome ||
      !clienteTrimmed.cnpj ||
      !clienteTrimmed.email ||
      !clienteTrimmed.telefone
    ) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    fetch("http://localhost:8080/clientes/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clienteTrimmed),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao cadastrar cliente.");
        }
        return res.json();
      })
      .then((data) => {
        setMensagem(`Cliente ${data.nome} cadastrado com sucesso!`);
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
        text="Nome do cliente"
        name="nome"
        placeholder="Insira o nome do cliente"
        onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
      />

      {/* Campo cnpj */}
      <Input
        type="text"
        text="Cnpj do Cliente"
        name="cnpj"
        placeholder="Insira o cnpj do cliente"
        onChange={(e) => setCliente({ ...cliente, cnpj: e.target.value })}
      />

      {/* Campo email */}
      <Input
        type="email"
        text="Email do cliente"
        name="email"
        placeholder="Insira o email do cliente"
        onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
      />

      {/* Campo telefone */}
      <Input
        type="tel"
        text="Telefone do cliente"
        name="telefone"
        placeholder="Insira o telefone do cliente"
        onChange={(e) => setCliente({ ...cliente, telefone: e.target.value })}
      />
      <div>
        <input className={styles.btn} type="submit" value="Cadastrar Cliente" />
      </div>

      {mensagem && <p className={styles.sucesso}>{mensagem}</p>}
      {erro && <p className={styles.erro}>{erro}</p>}
    </form>
  );
}

export default ClientForm;
