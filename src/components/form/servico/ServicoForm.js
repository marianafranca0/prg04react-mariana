import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../form/input/Input";
import Select from "../../form/select/Select";
import styles from "../Form.module.css";

function ServicoForm() {
  const navigate = useNavigate();

  const [servico, setServico] = useState({
    descricao: "",
    orcamento: "",
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

  function handleSubmit(e) {
    e.preventDefault();

    // validação
    if (!servico.descricao || !servico.orcamento || !servico.idProjeto) {
      alert("Preencha todos os campos!");
      return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8080/servicos/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(servico),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao cadastrar serviço");
        }
        return res.json();
      })
      .then(() => {
        alert("Serviço cadastrado com sucesso!");
        navigate("/dashboard/servicos"); // volta para a lista de serviços
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
        text="Descrição do serviço"
        name="descricao"
        placeholder="Insira a descrição do serviço"
        onChange={(e) => setServico({ ...servico, descricao: e.target.value })}
      />

      {/* Campo orçamento */}
      <Input
        type="number"
        step="0.01"
        text="Orçamento"
        name="orcamento"
        placeholder="Insira o orçamento do serviço"
        value={servico.orcamento}
        onChange={(e) => {
          // remove caracteres não numéricos
          const valor = e.target.value.replace(/\D/g, "");
          // transforma em número decimal
          const numero = parseFloat(valor) / 100;

          // formata como moeda brasileira
          const formatado = numero
            ? new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(numero)
            : "";

          setServico({ ...servico, orcamento: numero });
          e.target.value = formatado; // mostra formatado
        }}
      />

      {/* Campo que seleciona o projeto já cadastrado */}
      <Select
        text="Selecione o projeto:"
        name="idProjeto"
        options={projetos} // lista vinda do back-end
        value={servico.idProjeto}
        handleOnChange={(e) =>
          setServico({ ...servico, idProjeto: e.target.value })
        }
      />

      <div>
        <input className={styles.btn} type="submit" value="Adicionar Serviço" />
      </div>

      {mensagem && <p className={styles.sucesso}>{mensagem}</p>}
      {erro && <p className={styles.erro}>{erro}</p>}
    </form>
  );
}

export default ServicoForm;
