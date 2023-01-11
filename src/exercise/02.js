// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // Extra Credit 01: 💯 lazy state initialization
  // Make the React.useState call use lazy initialization to avoid a performance bottleneck of reading into localStorage on every render.
  // 💰 You can do this by passing a function to React.useState instead of a value.
  // 💰 The function will only be called on the initial render. It will be called with the initial state.
  const [name, setName] = React.useState(() => window.localStorage.getItem('name') || initialName) // Extra Credit 01: 💯 lazy state initialization

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  })

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