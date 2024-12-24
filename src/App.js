import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from './components/Home/home';
import Componentes from './components/Componentes/componentes';
import Mantenimiento from './components/Mantenimiento/mant';
import Contact from './components/Contacto/contact';
import NotFound from './components/NotFound/notFound';
import ProductList from './components/Products/ProductList';
import ProductDetails from './components/Products/ProductDetails';
import Navbar from './components/Navbar/Navbar';
import products from './components/Products/ProductList';

function App() {
  let carrito = [];

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar numItems={carrito.length} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Componentes" element={<Componentes />} />
            <Route path="/Mantenimiento" element={<Mantenimiento />} />
            <Route path="/Contacto" element={<Contact />} />
            <Route path="/Componentes/productos" element={<ProductList products={products} />} />
            <Route path="/Componentes/productos/:id" element={<ProductDetails products={products.id} />} />

            <Route element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;