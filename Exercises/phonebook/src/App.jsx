import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    }).catch(error => console.error(error))
  },[])

  const formSubmission = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newPhoneNumber
    }

    if(persons.some(person => person.name === personObject.name))
    {
      const personMsg = `${newName} has already been added to the phonebook`;
      alert(personMsg);
    }
    else {
      setPersons(persons.concat(personObject));
    }
  }

  const handlePersonEntry = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberEntry = (event) => {
    setNewPhoneNumber(event.target.value);
  }

  const filterSearch = (event) => {
    setFilter(filter.splice(0, filter.length))
    const filterThrough = persons.filter(person => person.name.toUpperCase() === event.target.value.toUpperCase());
    setFilter(filter.concat(filterThrough)) 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterSearch={filterSearch} />
      
      <PersonForm formSubmission={formSubmission} handlePerson={handlePersonEntry} handleNumber={handleNumberEntry} newName={newName} newNumber={newPhoneNumber} />
      <h2>Numbers</h2>
      <Persons filtered={filter} persons={persons}/>
    </div>
  )
}

export default App