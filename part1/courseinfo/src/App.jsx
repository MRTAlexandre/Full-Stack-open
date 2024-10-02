const Content = (props) => {
  return(
    <>
      {props.course.parts.map((part, index) => (
        <Part key={index} part={part.name} exercise={part.exercises} />
      ))}
    </>
  )
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercise}</p>
  )
}
const Total = (props) => {
  const total = props.course.parts.reduce((n, {exercises}) => n + exercises, 0)

  return(
    <p>Number of exercises {total} </p>
  )
}

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
