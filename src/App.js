import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Home from "./components/pages/home/Home";

import NewProject from "./components/pages/projeto/NewProjeto";
import Projeto from "./components/pages/projeto/Projeto";
import Container from "./components/layout/container/Container";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Tarefa from "./components/pages/tarefa/Tarefa";
import NewTarefa from "./components/pages/tarefa/NewTarefa";
import NewClient from "./components/pages/cliente/NewCliente";
import ClienteForm from "./components/form/cliente/ClienteForm";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Equipe from "./components/pages/equipe/Equipe";
import NewEquipe from "./components/pages/equipe/NewEquipe";
import ServicoForm from "./components/form/servico/ServicoForm";
import Servico from "./components/pages/servico/Servico";

//* Componente para controlar a exibição da Navbar
function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/newclient";
  const hideFooter = location.pathname === "/newclient";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <Container customClass="min-height">
              <Home />
            </Container>
          }
        />

        <Route
          path="/projects"
          element={
            <Container customClass="min-height">
              <Projeto />
            </Container>
          }
        />
        <Route
          path="/tarefas"
          element={
            <Container customClass="min-height">
              <Tarefa />
            </Container>
          }
        />
        <Route
          path="/newproject"
          element={
            <Container customClass="min-height">
              <NewProject />
            </Container>
          }
        />
        <Route
          path="/newclient"
          element={
            <Container customClass="min-height">
              <NewClient />
            </Container>
          }
        />

        {/* Rota principal: Login + Cadastro juntos */}
        <Route
          path="/clientes"
          element={
            <Container customClass="min-height">
              <ClienteForm />
            </Container>
          }
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="projetos" element={<Projeto />} />
          <Route path="equipe" element={<Equipe />} />
          <Route path="tarefas" element={<Tarefa />} />
          <Route path="servicos" element={<Servico />} />
        </Route>

        {/* Rota para cadastrar nova tarefa */}
        <Route
          path="/newtarefa"
          element={
            <Container customClass="min-height">
              <NewTarefa />
            </Container>
          }
        />

        {/* Rota para cadastrar nova equipe */}
        <Route
          path="/newequipe"
          element={
            <Container customClass="min-height">
              <NewEquipe />
            </Container>
          }
        />

        {/* Rota para cadastrar novo serviço */}
        <Route
          path="/newservico"
          element={
            <Container customClass="min-height">
              <ServicoForm />
            </Container>
          }
        />
        
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

//* Componente raiz
//* define as rotas principais usando Router e aplica o layout
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
