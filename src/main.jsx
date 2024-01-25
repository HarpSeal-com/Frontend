import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './Components/Form.jsx'
import TopButtons from './Components/TopBar.jsx'
import Footer from './Components/Footer.jsx'
import './Style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
      <Footer />
  </React.StrictMode>,
)
