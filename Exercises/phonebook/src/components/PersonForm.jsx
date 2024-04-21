const PersonForm = ({formSubmission, handlePerson, handleNumber, newName, newNumber}) => {
    return (
        <>
        <form onSubmit={formSubmission}>
        <div>
        name: <input onChange={handlePerson} value={newName}/>
        </div>
        <div>
          number: <input onChange={handleNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </>
    )
}

export default PersonForm