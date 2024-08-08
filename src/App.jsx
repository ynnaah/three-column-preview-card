import { useState } from 'react'
import './App.css'
import PreviewCard from './pages/PreviewCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PreviewCard/>
      </div>
    </>
  )
}

export default App
