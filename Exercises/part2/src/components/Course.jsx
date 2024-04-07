import Header from './Header'
import Content from './Content'

const Course = ({name, parts}) => {
    return (
      <>
        <Header course={name} />
        <Content parts={parts} />
      </>
    )
}

export default Course