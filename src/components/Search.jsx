const Search = ({ setsearchedKeyword }) => {
  return (
    <header>
      <h1> 😎 Emoji Search 😎 </h1>

      <input
        type="text"
        className="input-search"
        placeholder="what emoji are you looking for?"
        onChange={(e) => {
          setsearchedKeyword(e.target.value);
        }}
      />
    </header>
  );
};

export default Search;
