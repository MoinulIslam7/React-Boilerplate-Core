import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppProvider from './providers/AppProvider'
import './index.css'
import Toast from './lib/Toaster/Toast.jsx'
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
    <Toast />
  </AppProvider>
)
