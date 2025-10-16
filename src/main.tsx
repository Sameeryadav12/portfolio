// src/main.tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import App from './App'
import ErrorBoundary from './ErrorBoundary'
import './index.css'
import ThemeProvider from './theme/ThemeProvider'

// ---- polyfills (kept) ----
import { Buffer } from 'buffer'
;(window as any).Buffer = Buffer

// ---- remove boot overlay as soon as React mounts ----
declare global {
  interface Window {
    __APP_MOUNTED__?: boolean
  }
}
function clearBoot() {
  ;(window as any).__APP_MOUNTED__ = true
  const boot = document.getElementById('boot')
  if (boot && boot.parentNode) boot.parentNode.removeChild(boot)
}

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root element #root not found')

createRoot(rootEl).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <ParallaxProvider>
            <App />
          </ParallaxProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
)

// mark mounted on the next animation frame to ensure paint happened
requestAnimationFrame(clearBoot)

