import React from 'react';
import ReactDOM from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import App from './App';
import './App.css';

if (process.env.NODE_ENV === 'production') {
    console.log('Produção')
    disableReactDevTools();
}
   

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
