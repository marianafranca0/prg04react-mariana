import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";
import Tasks from "./components/pages/Tasks";
import NewClient from "./components/pages/NewClient";

//* Componente raiz
//* define as rotas principais usando Router e aplica o layout
function App() {
  return (
    <Router>
      <Navbar />

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
          path="/company"
          element={
            <Container customClass="min-height">
              <Company />
            </Container>
          }
        />
        <Route
          path="/contact"
          element={
            <Container customClass="min-height">
              <Contact />
            </Container>
          }
        />
        <Route
          path="/projects"
          element={
            <Container customClass="min-height">
              <Projects />
            </Container>
          }
        />
        <Route
          path="/tasks"
          element={
            <Container customClass="min-height">
              <Tasks />
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
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
