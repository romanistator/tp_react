import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyApp from './MyApp.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
)
