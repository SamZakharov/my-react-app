import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import Catalog from './pages/Catalog/index.js';
import Product from './pages/Product/index.js';
import Cart from './pages/Cart/index.js';
import Checkout from './pages/Checkout/index.js';

const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/" element={<Catalog/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
