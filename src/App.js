import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Booking from './Pages/Booking';
import Clientes from './Pages/Clientes';
import Relatorios from './Pages/Relatorios';
import Layout from './Pages/Layout';
import RastrearCarga from './Pages/RastrearCarga';
import Remanejamento from './Pages/Remanejamento';
import VisaoGeralClientes from './Pages/VisaoGeralClientes';
import OperacoesEmCurso from './Pages/OperacoresEmCurso';
import Rastreamento from './Pages/Rastreamento';
import NotFound from './Pages/NotFound';

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="Booking" element={<Booking />} />
          <Route path="Clientes" element={<Clientes />} />
          <Route path ="Relatorios" element={<Relatorios/>} />
          <Route path ="RastrearCarga" element={<RastrearCarga/>} />
          <Route path ="Remanejamento" element={<Remanejamento/>} />
          <Route path ="VisaoGeralClientes" element={<VisaoGeralClientes/>} />
          <Route path ="OperacoesEmCurso" element={<OperacoesEmCurso/>} />
          <Route path ="Rastreamento" element={<Rastreamento/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
