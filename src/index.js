import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD

=======
import { AuthProvider } from "./hooks/useAuth";
import { BrowserRouter } from "react-router-dom";
>>>>>>> Sprint2

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
<<<<<<< HEAD
=======

>>>>>>> Sprint2
