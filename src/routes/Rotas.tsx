"use client";

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalogue from '@/pages/Catalogue';
import Login from '@/pages/Login';
import Home from '@/app/page';
import CreateProduct from '@/pages/CreateProduct';

const Rotas = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/catalogo" element={<Catalogue />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create_product" element={<CreateProduct />} />
        </Routes>
  </Router>
  );
};

export default Rotas;