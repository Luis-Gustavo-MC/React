import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstComponent/>

      {/* Template Expression */}
      <TemplateExpression/>
    </>
  )
}

export default App
