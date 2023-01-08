// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// Extra Credit 01: 💯 accept an initialName
// Make the Greeting accept a prop called initialName and initialize the name state to that value.
function Greeting({initialName = ''}) { // Extra Credit 01: 💯 accept an initialName
  const [name, setName] = React.useState(initialName) // Extra Credit 01: 💯 accept an initialName

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input placeholder={name} onChange={handleChange} id="name" /> {/* Extra Credit 01: 💯 accept an initialName (placeholder) */}
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Yoda" /> // Extra Credit 01: 💯 accept an initialName
}

export default App
