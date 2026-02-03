import { useState, useEffect } from "react";
import LinkButton from "../../layout/linkbutton/LinkButton";
import styles from "../Page.module.css";

//* Página de Equipe
//* Permite visualizar e criar novos membros da equipe
//* Dividida em duas seções: criar equipe e listar membros cadastrados
function Equipe() {
  const [equipes, setEquipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/equipes/findall")
      .then((res) => res.json())
      .then((data) => {
        setEquipes(Array.isArray(data) ? data : data.content || []);
      })
      .catch(() => setEquipes([]));
  }, []);

  return (
    <div className={styles.container}>
      {/* Seção para criar equipe */}
      <section className={styles.section}>
        <h2>Criar Equipe</h2>
        <p>Cadastre um novo membro na equipe de desenvolvimento:</p>
        <div className={styles.btn_container}>
          <LinkButton to="/newequipe" text="Criar equipe"></LinkButton>
        </div>
      </section>

      {/* Seção para visualizar equipes */}
      <section className={styles.section}>
        <h2>Membros da Equipe Cadastrados</h2>
        <div className={styles.list}>
          {equipes.length === 0 ? (
            <p>.</p>
          ) : (
            <ul>
              {equipes.map((e) => (
                <li key={e.id}>
                  {e.nome} - {e.cargo}
                  {e.projeto && ` (Projeto: ${e.projeto.nome})`}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

export default Equipe;
