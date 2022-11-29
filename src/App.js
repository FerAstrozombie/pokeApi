import './App.css';
import Pokemon from './components/paginas/Pokemon';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/navBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='pokedex' element={<Pokemon/>} />
        <Route path='/' element={<Inicio/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
