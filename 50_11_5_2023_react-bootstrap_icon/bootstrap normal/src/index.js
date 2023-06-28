import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Content from "./components/Content";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <>
    <Navbar />
    <Content/>
    </>
  
);
reportWebVitals();
