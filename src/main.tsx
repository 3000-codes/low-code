import React from 'react'
import ReactDOM from 'react-dom/client'

import 'normalize.css'
import 'animate.css'
import App from './App'
import 'virtual:uno.css'
import './style/index.scss'
import './assets/iconfont/iconfont.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)
