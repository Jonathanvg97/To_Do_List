import React from 'react';
import ReactDOM from 'react-dom/client'; // se importa el DOM
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/*Componente principal que contendra los demas componentes*/}
  </React.StrictMode>
);


