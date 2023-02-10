import React from 'react';
import Field from './components/field';
import Page from './components/page';
import Setup from './components/setup';
import Sidebar from './components/sidebar';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { BaukastenProvider } from '@hygraph/baukasten';

export default function App() {
    return (
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
    );
}
 