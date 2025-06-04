import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const filteredList = (persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())))

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    event.preventDefault()
  }

  const isNameDuplicated = (name) => {
    return persons.find(person => person.name === name)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={handleFilterChange} />
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
      <h3>Numbers</h3>
      <Persons persons={filteredList} />
    </div>
  )
}

export default App