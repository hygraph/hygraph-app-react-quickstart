import React from 'react';
import ReactDOM from 'react-dom/client';
import Field from './components/field';
import Page from './components/page';
import Setup from './components/setup';
import Sidebar from './components/sidebar';

import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import { BaukastenProvider } from '@hygraph/baukasten';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BaukastenProvider>
    <Router>
      <Routes>
        <Route exact path="setup" element={<Setup />} />
        <Route exact path="page" element={<Page />} />
        <Route exact path="field" element={<Field />} />
        <Route exact path="sidebar" element={<Sidebar />} />  
      </Routes>
    </Router>
    </BaukastenProvider>
  </React.StrictMode>

);
