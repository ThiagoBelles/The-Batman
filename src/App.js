import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Contatos from './pages/contatos/contatos';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentarios/comentarios';

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contatos' element={<Contatos/>} />
          <Route path='/fotos' element={<Fotos/>} />
          <Route path='/comentarios' element={<Comentarios />} />
        </Routes>
      </BrowserRouter>
         
    </>
  );
}

export default App;
