import ClientForm from "../form/ClientForm";
import styles from "./New.module.css";
import cliente from "../../img/cliente.png";

//* Página de cadastro de clientes
function NewCliente() {
  return (
    <div className={styles.new_container}>
      <img src={cliente} alt="cliente" />
      <h1>Formulário de Cadastro</h1>

      <ClientForm />
    </div>
  );
}

export default NewCliente;
