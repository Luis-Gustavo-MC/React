import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
import MyComponent from './components/myComponent'
import Events from './components/events'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstComponent/>
      {/* Template Expression */}
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </>
  )
}

export default App
