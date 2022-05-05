import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './components/ThemeContext';
import  Background  from './components/Background';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Background>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();