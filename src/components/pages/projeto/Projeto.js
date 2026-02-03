import { useState, useEffect } from "react";
import LinkButton from "../../layout/linkbutton/LinkButton";
import styles from "../Page.module.css";

//* Página de Projetos
//* Permite visualizar e criar novos projetos
//* Dividida em duas seções: criar projeto e listar projetos cadastrados
function Projeto() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/projetos/findall")
      .then((res) => res.json())
      .then((data) => {
        setProjetos(Array.isArray(data) ? data : data.content || []);
      })
      .catch(() => setProjetos([]));
  }, []);
  return (
    <div className={styles.container}>
      {/* Seção para criar projeto */}
      <section className={styles.section}>
        <h2>Criar Projeto</h2>
        <p>Cadastre um novo projeto:</p>
        <div className={styles.btn_container}>
          <LinkButton to="/newproject" text="Criar projeto"></LinkButton>
        </div>
      </section>

      {/* Seção para visualizar projetos */}
      <section className={styles.section}>
        <h2>Projetos Cadastrados</h2>
        <div className={styles.list}>
          {projetos.length === 0 ? (
            <p>.</p>
          ) : (
            <ul>
              {projetos.map((p) => (
                <li key={p.id}>
                  <strong>{p.nome}</strong> - {p.descricao} <br></br>
                  {p.cliente && ` (Cliente: ${p.cliente.nome})`}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

export default Projeto;
