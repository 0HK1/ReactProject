import './App.css';
import HelloWorld from './components/HelloWorld.js';
import NameApiService from './services/NameApiService.js';
import Pessoa from './components/Pessoa.js';
import ImgApiService from './services/ImgApiService.js';
import { useState, useEffect } from 'react';
import List from './components/List.js';
import Evento from './components/Evento.js';

function App() {
  
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  
  useEffect(() => {
    const fetchName = async () => {
      const fetchedName = await NameApiService();
      const fetchedUrl = await ImgApiService();
      setUrl(fetchedUrl);
      setName(fetchedName);
    };

    fetchName();
  }, []);

  return (
    <div className="App">
      <HelloWorld />
      <Pessoa foto={url} nome={name} idade="30" profissao="Desenvolvedor" />
      <List/>
      <Evento/>
    </div>
  );
}

export default App;
