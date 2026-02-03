import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../input/Input";
import styles from "../Form.module.css";

//* Componente de formulário de login de clientes.
function LoginForm({ onSwitch }) {
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    email: "",
    senha: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const clienteTrimmed = {
      email: cliente.email.trim(),
      senha: cliente.senha.trim(),
    };

    if (!clienteTrimmed.email || !clienteTrimmed.senha) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    fetch("http://localhost:8080/clientes/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clienteTrimmed),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao realizar login.");
        }
        return res.json();
      })
      .then((data) => {
        setMensagem(`Cliente ${data.nome} logado com sucesso!`);
        setErro("");
        navigate("/dashboard");
      })
      .catch((err) => {
        setErro(err.message);
        setMensagem("");
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        type="email"
        text="Email"
        name="email"
        placeholder="Informe seu email"
        onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
        value={cliente.email}
      />

      <Input
        type="password"
        text="Senha"
        name="senha"
        placeholder="Informe sua senha (máx. 8 caracteres)"
        onChange={(e) => {
          const valor = e.target.value;
          if (valor.length <= 8) {
            setCliente({ ...cliente, senha: valor });
          }
        }}
        value={cliente.senha}
        maxLength="8"
      />

      <div>
        <input className={styles.btn} type="submit" value="Entrar" />
      </div>

      <p className={styles.signup_text}>
        Não tem conta?{" "}
        <button type="button" className={styles.signup_link} onClick={onSwitch}>
          Você pode criar uma!
        </button>
      </p>

      {mensagem && <p className={styles.sucesso}>{mensagem}</p>}
      {erro && <p className={styles.erro}>{erro}</p>}
    </form>
  );
}

export default LoginForm;
