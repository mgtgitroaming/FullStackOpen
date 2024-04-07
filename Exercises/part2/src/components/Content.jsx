import Part from './Part'

const Content = (parts) => {
    console.log(parts)
    return (
      <>
      {
      parts.map((part) => {
        <Part part={part.name} key={part.id}/>
      })
      }
     </>
    )
  }

  export default Content