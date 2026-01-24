import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Home from "./components/pages/Home";

import NewProject from "./components/pages/NewProjeto";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projeto from "./components/pages/Projeto";
import Tarefa from "./components/pages/Tarefa";
import NewTarefa from "./components/pages/NewTarefa";
import NewClient from "./components/pages/NewClient";
import ClienteForm from "./components/form/ClienteForm";
import Dashboard from "./components/pages/Dashboard";
import Equipe from "./components/pages/Equipe";
import NewEquipe from "./components/pages/NewEquipe";

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
