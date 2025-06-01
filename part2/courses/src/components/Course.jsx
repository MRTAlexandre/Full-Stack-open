const Course = ({course}) =>{
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
    </>
  );
};

export default Course;