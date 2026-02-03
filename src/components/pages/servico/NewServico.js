import styles from "../New.module.css";
import ServicoForm from "../../form/servico/ServicoForm";

//* Página de criação de serviços que contém o formulário de serviço.
function NewServico() {
  return (
    <div className={styles.new_container}>
      <ServicoForm />
    </div>
  );
}

export default NewServico;