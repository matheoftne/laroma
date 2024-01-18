import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import APropos from './pages/APropos/APropos';
import SalleATheme from './pages/SalleATheme/SalleATheme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CarteDesConsos from './pages/CarteDesConsos/CarteDesConsos';
import NosProduits from './pages/NosProduits/NosProduits';
import BlogLong from './components/BlogLong/BlogLong';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/salle-a-theme" element={<SalleATheme/>} />
        <Route path="/carte-des-consos" element={<CarteDesConsos />} />
        <Route path="/nos-produits" element={<NosProduits />} />
        <Route path="/blog" element={<BlogLong />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
