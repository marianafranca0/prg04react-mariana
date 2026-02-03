import { useState, useEffect } from "react";
import LinkButton from "../../layout/linkbutton/LinkButton";
import styles from "../Page.module.css";

//* Página de Serviço
//* Permite visualizar e criar novos serviços
//* Dividida em duas seções: criar serviço e listar serviços cadastrados
function Servico() {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/servicos/findall")
      .then((res) => res.json())
      .then((data) => {
        setServicos(Array.isArray(data) ? data : data.content || []);
      })
      .catch(() => setServicos([]));
  }, []);

  return (
    <div className={styles.container}>
      {/* Seção para criar serviço */}
      <section className={styles.section}>
        <h2>Criar Serviço</h2>
        <p>Cadastre um novo serviço:</p>
        <div className={styles.btn_container}>
          <LinkButton to="/newservico" text="Criar serviço"></LinkButton>
        </div>
      </section>

      {/* Seção para visualizar serviços cadastrados */}
      <section className={styles.section}>
        <h2>Serviços Cadastrados</h2>
        <div className={styles.list}>
          {servicos.length === 0 ? (
            <p>Nenhum serviço cadastrado.</p>
          ) : (
            <ul>
              {servicos.map((s) => (
                <li key={s.id}>
                  {s.descricao} - R$ {s.orcamento}
                  {s.projeto && ` (Projeto: ${s.projeto.nome})`}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

export default Servico;
