import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planos from "./pages/Planos";
import Dashboard from "./pages/Dashboard";
import Diagnostico from "./pages/Diagnosticos";
import Pesquisar from "./pages/Pesquisar";
// import Informacoes from "./pages/Informacoes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/pesquisar" element={<Pesquisar />} />
        {/* <Route path="/informacoes" element={<Informacoes />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
import Home from "./pages/Home";

function App() {
  return <Home />;
}

export default App;
