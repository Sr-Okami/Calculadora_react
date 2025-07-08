import React from "react";
import { createRoot } from 'react-dom/client';
import Header from "./components/Header.jsx";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById('root')).render(
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{<App />}</main>
        <Footer />
    </div>
);
