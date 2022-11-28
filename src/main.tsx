import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const APP_NODE = document.getElementById('root') as HTMLElement

import './globals.css'
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

if (!APP_NODE.innerHTML) {
  const root = ReactDOM.createRoot(APP_NODE)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
