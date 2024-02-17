//Allow users to type the hymn they are looking for. Handle user input and trigger the API request.

function SearchBar({ input, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>Text input: </label>
      <input
        name="myInput"
        value={input}
        onChange={handleChange}
        placeholder="Psalm 136"
      />
    </form>
  );
}

export default SearchBar;
