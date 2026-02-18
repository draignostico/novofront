import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaginaLogin from './pages/PaginaLogin';
import PaginaCadastro from './pages/PaginaCadastro';
import EsqueceuSenha from './pages/EsqueceuSenha';
import Analise from './pages/Analise';

function App() {
  return (
    <Router>
      <Routes>
        {/* Agora a Home é a página principal */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/recuperar" element={<EsqueceuSenha />} />
        <Route path="/analise" element={<Analise />} />
      </Routes>
    </Router>
  );
}

export default App;