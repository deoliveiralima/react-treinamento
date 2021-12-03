import logo from './logo.svg';
import './App.css';
import Cadastro from './components/links/Cadastro';
import React,{useState} from 'react';
import Exibir from './components/links/Exibir';

function App() {
  const [link, setLink] = useState([link = {nome: '', url: ''}])
 
  return (
    <div className="App">
     <Cadastro link={link} setLink = {setLink}/>

    </div>
  );
}

export default App;
