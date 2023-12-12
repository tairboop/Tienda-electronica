
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigationbar from './component/Navigationbar';
import CarouselPage from './paginas/CarouselPage'
import CardPage from './paginas/CardPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './paginas/HomePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigationbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/paginas/carousel' element={<CarouselPage/>}></Route>
        <Route path='/paginas/card' element={<CardPage/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
