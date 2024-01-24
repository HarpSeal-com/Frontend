import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './Form.jsx'
import TopButtons from './TopBar.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
      <Footer />
  </React.StrictMode>,
)
