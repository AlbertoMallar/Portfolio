import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //aqui es donde vamos a inicializar el provider del store de REDUX
  <React.StrictMode>
    <App />
  </React.StrictMode>
);