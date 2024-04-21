const Persons = ({persons, filtered}) => {
    if(filtered.length == 0)
    {
        return(
            <ul>
                {
                persons.map(person => 
                    <li key={person.name}>{person.name} - {person.number}</li>
                )
                }
            </ul>
        )
    }
    else{
        return(
            <ul>
                {
                    filtered.map(person => 
                        <li key={person.name}>{person.name} - {person.number}</li>                    )
                }
            </ul>
        )
    }
}

export default Persons;

