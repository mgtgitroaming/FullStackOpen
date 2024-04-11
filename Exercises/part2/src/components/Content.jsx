import Part from './Part'

const Content = ({parts}) => {
    return (
      <>
      <ul>
      {
      parts.map((part) => {
        return (
        <Part part={part.name} exercise={part.exercises} key={part.id}/>
      )
      })
      }
      </ul>
     </>
    )
  }

  export default Content