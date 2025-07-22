const PersonForm = ({ handleStateChange, submitFormFunction, setNewName, nameValue, setNewNumber, numberValue,   }) => {
  return(
    <form onSubmit={submitFormFunction}>
      <div>
        name:
        <input
          value={nameValue}
          onChange={event => handleStateChange(event, setNewName)}
        />
      </div>
      <div>
        number:
        <input
          value={numberValue}
          onChange={event => handleStateChange(event, setNewNumber)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;