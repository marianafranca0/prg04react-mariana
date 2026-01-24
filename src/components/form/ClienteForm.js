import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

//* Controlador que alterna entre Login e Cadastro
function ClientForm() {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  return (
    <>
      {isCreatingAccount ? (
        <SignupForm onSwitch={() => setIsCreatingAccount(false)} />
      ) : (
        <LoginForm onSwitch={() => setIsCreatingAccount(true)} />
      )}
    </>
  );
}

export default ClientForm;
