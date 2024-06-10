import logo from './logo.svg';
import './App.css';
import Addstud from './components/Addstud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Searchstud from './components/Searchstud';
import Deletestud from './components/Deletestud';
import Viewall from './components/Viewall';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Addstud/>}/>
    <Route path='/search' element={<Searchstud/>}/>
    <Route path='/delete' element={<Deletestud/>}/>
    <Route path='/viewall' element={<Viewall/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
