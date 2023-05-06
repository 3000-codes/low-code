import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import 'normalize.css'
import 'animate.css'
import 'virtual:uno.css'
import store from './store'
import App from './App'
import './style/index.scss'
import './assets/iconfont/iconfont.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
)
