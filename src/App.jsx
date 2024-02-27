import React from 'react';
import SideBar from './components/SideBar.jsx';
import Comprobantes from './components/Comprobantes.jsx';

import './styles/tailwind.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="main-content">
          <Routes>
            <Route path="/Comprobantes" element={<Comprobantes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
