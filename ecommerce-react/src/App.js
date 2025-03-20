import { BrowaweRouter, Routes } from 'react-router-dom';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Home';
import Home from './paginas/Login';



function App() {
  return (
    <BrowaweRouter>
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/login" element= {<Login />}/>
      <Route path="/cadastro" element= {<Cadastro />}/>

    </Routes>
    </BrowaweRouter>
 
  );
}

export default App;
