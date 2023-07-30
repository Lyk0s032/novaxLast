import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import './App.css'
import Home from './components/home/home';
import LoginForm from './components/login/login';
import Panel from './components/panel/panel';
import Sorteo from './components/sort/sorteo';
import Nav from './components/home/nav/nav';
import Facture from './components/facture/facture';
import Download from './components/download/download';

function App() {

  return (
    <div className='app'>
      <Nav />
        <Router>
            <Routes>

              <Route path="/*" element={<Home />} />
              <Route path="/sort/:sorteo/*" element={<Sorteo />} />
              <Route path="/factura/:factura/*" element={<Facture />} />
              <Route path="/download/*" element={<Download /> } />
              
              { /* Login */}
              <Route exact path="/login" 
              element={ <LoginForm />} />
              { /* Panel */ }
              <Route exact path="/panel/*" element={<Panel />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
