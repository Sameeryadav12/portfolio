import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import App from './App'
import './index.css'
import { registerSW } from 'virtual:pwa-register'

createRoot(document.getElementById('root')!).render(
  <ParallaxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ParallaxProvider>
)
registerSW({ immediate: true })