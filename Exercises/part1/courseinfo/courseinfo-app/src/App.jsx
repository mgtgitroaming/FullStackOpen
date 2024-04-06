const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  ) 
}

const Part = (props) => {
  console.log(props.part)
  return(
    <p>{props.part}</p> 
  ) 
}

const Content = (props) => {
  console.log(props)
  return (
    <>
   <Part part={props.parts[0].name} />
   <Part part={props.parts[1].name} />
   <Part part={props.parts[2].name} />
   </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total[0].exercise + props.total[1].exercise + props.total[2].exercise}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }
  const parts = []

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>  
  ) 
}

export default App
