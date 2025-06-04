import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isNameDuplicated(newName)) {
      return alert(`${newName} is already added to the phonebook`)
    }
    const nameObject = {id: persons.length + 1, name: newName, number: newNumber}
    setPersons([...persons, nameObject]);
    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    event.preventDefault();
  }

   const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => {
          return <div key={person.id}>{person.name} {person.number}</div>
        })}
    </div>
  )
}

export default App