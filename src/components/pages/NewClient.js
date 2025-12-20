import ClientForm from "../cliente/ClientForm";
import styles from "./New.module.css";

//* Página de cadastro de clientes
function NewCliente() {
  return (
    <div className={styles.new_container}>
      <h1>Login</h1>
      <p>Cadastre-se para criar seu projeto</p>

      <ClientForm />
    </div>
  );
}

export default NewCliente;
