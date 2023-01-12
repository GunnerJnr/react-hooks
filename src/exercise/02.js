// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') || initialName,
  )

  // Extra Credit 02: 💯 effect dependencies
  // Add a dependencies array for React.useEffect to avoid the callback being called too frequently.
  // 💰 The dependencies array should be an array with the name state variable in it.
  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  }, [name]) // only run when name changes (dependency array) - Extra Credit 02: 💯 effect dependencies

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Rebecca" />
}

export default App
