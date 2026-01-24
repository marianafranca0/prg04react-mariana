import ClientForm from "../form/ClienteForm";
import styles from "./New.module.css";

//* Página de cadastro de clientes que contém o formulário de cliente.
function NewCliente() {
  return (
    <div className={styles.new_container}>
      <ClientForm />
    </div>
  );
}

export default NewCliente;
