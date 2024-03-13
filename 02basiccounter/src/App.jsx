import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(15)
  
  const addValue = () => {
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Welcome to react learning {counter}</h1>
      <h2>Current value of counter: {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
