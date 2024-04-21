import { useState, useEffect } from 'react'
import Note from './components/Notes'
import axios from 'axios'
import noteService from './services/notes';

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note....');
  const [showAll, setShowAll] = useState(true);

  useEffect( () => {
    console.log('effect');
    noteService.getAll()
    .then(initialNotes => {
      setNotes(initialNotes)
    })
    console.log('render', notes.length, 'notes')
  },[])

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
        content: newNote,
        important: Math.random() < 0.5,
        id: notes.length + 1
    };

    noteService.create(noteObject)
    .then(newNote => setNotes(notes.concat(newNote)));
    setNewNote('');
  }

  const handleNoteChange  = (event) => {
    setNewNote(event.target.value);
  }

  const notesToShow = showAll ? notes : notes.filter(x=>x.important);

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id);
    const changedNote = {...note, important: !note.important}

    noteService.update(id, changedNote).then(updateNote => {
      setNotes(notes.map(note=>note.id !== id ? note : updateNote))
    }).catch(error=>{
      alert(`the notes ${note.content} was deleted from ther server`);
      setNotes(n=>n.id !== id);
    })
  }

  return (
    <div>
        <h1>Notes</h1>
        <div>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
        </div>
        <ul>
            {notesToShow.map(note => 
                <Note key={note.id} note={note} 
                toggleImportance={() => toggleImportanceOf(note.id)}
                />
            )}
        </ul>
        <form onSubmit={addNote}>
            <input onChange={handleNoteChange} value={newNote}/>
            <button type="submit">save</button>
        </form>
    </div>
  )
}

export default App