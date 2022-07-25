import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './fonts/ibmplexmono.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'react-style-reset/string'
import { AudioManager } from './shared/AudioManager'
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const GlobalStyles = createGlobalStyle`
  ${normalize};
`
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <AudioManager>
        <App />
      </AudioManager>
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
