import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isNameDuplicated(newName)) {
      return alert(`${newName} is already added to the phonebook`)
    }
    const nameObject = {name: newName}
    setPersons([...persons, nameObject]);
    setNewName("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    event.preventDefault();
  }

  const isNameDuplicated = (name) => {
    return persons.find(person => person.name === name)
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