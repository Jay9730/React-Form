import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header, Footer} from './components';
import {Home, Formfill} from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Formfill />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
