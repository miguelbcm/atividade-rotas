import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Section from './Components/Home';
import Footer from './Components/Footer';
import viagens from './Components/imagens/viagens.jpg'
import lupa from './Components/imagens/lupa.png'
import mala from './Components/imagens/mala.jpg'
import instagram from './Components/imagens/insta.jpg'
import facebook from './Components/imagens/face.jpg'
import tiktok from './Components/imagens/tiktok.png'
import whats from './Components/imagens/whtas.png'
import Home from './Components/Home';
import Canyon from './Components/Canyon'
import Escocia from './Components/Escocia'
import Muralha from './Components/Muralha'
import Aruba from './Components/Aruba'
import img_aruba from './Components/imagens/Aruba.jpg'
import img_muralha from './Components/imagens/Muralha.jpg'





function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Canyon' element={<Canyon />} />
          <Route path='Escocia' element={<Escocia />} />
          <Route path='Muralha' element={<Muralha />} />
          <Route path='Aruba' element={<Aruba />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
