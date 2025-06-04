const Filter = ({ filter, setFilter }) => {
  return(
    <>
      filter shown with:
      <input
        value={filter}
        onChange={setFilter}
      />
    </>
  );
}

export default Filter;