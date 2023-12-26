import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './Form.jsx'
import TopButtons from './TopBar.jsx'
import Footer from './Footer.jsx'
import GithubBanner from "./GithubBanner.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <TopButtons />
      <GithubBanner />
      <App />
      <Form />
      <Footer />
  </React.StrictMode>,
)
