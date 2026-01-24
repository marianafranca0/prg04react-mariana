import { useState } from "react";
import Input from "../form/Input";
import styles from "./Form.module.css";

//* Formulário que coleta dados do cliente para cadastro de nova conta.
function SignupForm({ onSwitch }) {
  const [cliente, setCliente] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const clienteTrimmed = {
      nome: cliente.nome.trim(),
      email: cliente.email.trim(),
      senha: cliente.senha.trim(),
      telefone: cliente.telefone.trim(),
    };

    if (
      !clienteTrimmed.nome ||
      !clienteTrimmed.email ||
      !clienteTrimmed.senha ||
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
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Campo nome (apenas ao criar conta) */}
      <Input
        type="text"
        text="Nome"
        name="nome"
        placeholder="Insira o seu nome"
        onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
        value={cliente.nome}
      />

      {/* Campo email */}
      <Input
        type="email"
        text="Email"
        name="email"
        placeholder="Informe seu email"
        onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
        value={cliente.email}
      />

      {/* Campo senha */}
      <Input
        type="password"
        text="Senha"
        name="senha"
        placeholder="Informe sua senha (máx. 8 caracteres"
        onChange={(e) => {
          const valor = e.target.value;
          if (valor.length <= 8) {
            setCliente({ ...cliente, senha: valor });
          }
        }}
        value={cliente.senha}
        maxLength="8"
      />

      {/* Campo telefone (apenas ao criar conta) */}

      <Input
        type="text"
        text="Telefone"
        name="telefone"
        placeholder="Informe seu telefone (11 dígitos)"
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
                7,
              )}-${valor.slice(7)}`;
            }
            setCliente({ ...cliente, telefone: telefoneFormatado });
          }
        }}
        value={cliente.telefone}
      />

      <div>
        <input className={styles.btn} type="submit" value="Criar Conta" />
      </div>

      <p className={styles.signup_text}>
        Já tem uma conta?{" "}
        <button type="button" className={styles.signup_link} onClick={onSwitch}>
          Voltar ao Login
        </button>
      </p>

      {mensagem && <p className={styles.sucesso}>{mensagem}</p>}
      {erro && <p className={styles.erro}>{erro}</p>}
    </form>
  );
}

export default SignupForm;
