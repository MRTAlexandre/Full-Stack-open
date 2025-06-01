const Course = ({course}) =>{

  const total = course.parts.reduce((sum, part) => {
    sum = sum + part.exercises
    return sum
  }, 0)
  return(
    <>
      <header>
        <h1>{course.name}</h1>
      </header>
      <dl>
        {course.parts.map(part => {
          return (
            <li key={part.id}> {part.name} {part.exercises}</li>
          )
        })}
      </dl>
      <h3>total of {total} exercises</h3>
    </>
  );
};

export default Course;