import { useState } from "react";
import Input from "./Input";
import styles from "../form/Form.module.css";

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
        text="Nome"
        name="nome"
        placeholder="Insira o nome do cliente"
        onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
      />

      {/* Campo cnpj */}
      <Input
        type="text"
        text="Cnpj"
        name="cnpj"
        placeholder="Insira o cnpj do cliente (14 dígitos)"
        onChange={(e) => {
          const valor = e.target.value.replace(/\D/g, "");
          if (valor.length <= 14) {
            setCliente({ ...cliente, cnpj: valor });
          }
        }}
        value={cliente.cnpj}
      />

      {/* Campo email */}
      <Input
        type="email"
        text="Email"
        name="email"
        placeholder="Insira o email do cliente"
        onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
      />

      {/* Campo telefone */}
      <Input
        type="text"
        text="Telefone"
        name="telefone"
        placeholder="Insira o telefone do cliente (11 dígitos)"
        onChange={(e) => {
          const valor = e.target.value.replace(/\D/g, "");
          if (valor.length <= 11) {
            let telefoneFormatado = valor;
            if (valor.length >= 2) {
              telefoneFormatado = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
            }
            if (valor.length > 7) {
              telefoneFormatado = `(${valor.slice(0, 2)}) ${valor.slice(
                2,
                7
              )}-${valor.slice(7)}`;
            }
            setCliente({ ...cliente, telefone: telefoneFormatado });
          }
        }}
        value={cliente.telefone}
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
