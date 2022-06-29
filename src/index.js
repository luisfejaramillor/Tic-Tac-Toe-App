import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { TicTacToeApp } from './TicTacToeApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TicTacToeApp />
  </React.StrictMode>
);
