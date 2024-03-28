import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ListGroup from './components/ListGroup.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ListGroup items={["New York", "San Francisco", "Tokyo", "London", "Paris"]} heading='cities1' />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('header')!).render(
  <React.StrictMode>
    <App items={["New York", "San Francisco", "Tokyo", "London", "Paris"]} heading='cities2' />
  </React.StrictMode>,
)
