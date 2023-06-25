import {useState} from 'react'
import './App.css'

import {useTheme} from "../../package/dist";

const themes = ["light", "dark"]

function App() {
  const [themeIdx, setThemeIdx] = useState(0);

  useTheme(themes[themeIdx], document.documentElement);

  return (
    <div className="flex flex-col gap-2 text-copy">
      <h1 className="text-xl font-bold">
          Examples
      </h1>
        <button
            className="p-4 rounded-lg bg-primary hover:bg-primary-dark text-primary-copy"
            onClick={() => {
                if (themeIdx === themes.length - 1) {
                    setThemeIdx(0);
                } else {
                    setThemeIdx(themeIdx + 1);
                }
            }}
        >
            Switch Theme
        </button>
        <h1 className="text-copy">
            Primary Text
        </h1>
        <h2 className="text-copy-gray">
            Accent Text
        </h2>
    </div>
  )
}

export default App
