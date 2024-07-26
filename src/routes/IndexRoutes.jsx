

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../Component/Auth/Login';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
const IndexRoutes = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};
export default IndexRoutes;
