import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyGlobalStyles } from './globalStyles';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MyGlobalStyles />
    <App />
  </BrowserRouter>,
)
