import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = {name: newName}
    setPersons([...persons, name]);
    setNewName("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    event.preventDefault();
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => {
          return <div key={person.name}>{person.name}</div>
        })}
    </div>
  )
}

export default App