import { BrowaweRouter, Routes } from 'react-router-dom';
import Home from './paginas/Login';



function App() {
  return (
    <BrowaweRouter>
    <Routes>
      <Route path="/" element= {<Home />}/>
 
    </Routes>
    </BrowaweRouter>
 
  );
}

export default App;
