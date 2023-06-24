import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {ThemesProvider} from "../../package/dist";

import themeConfig from "./themeConfig.js";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemesProvider config={themeConfig}>
          <App />
      </ThemesProvider>
  </React.StrictMode>,
)
